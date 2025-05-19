import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { comparePassword, encodePassword } from 'src/utils/bcrypt';
// IMPORTS ACIMA-----------------------^

// Service responsável pelas operações de autenticação(registro e login com token)
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: DatabaseService,
    private jwtService: JwtService,
  ) {}

  // -------------------------------------------------- //
  // ----- Registra um usuário e retorna os tokens ---- //
  // -------------------------------------------------- //
  async register(registerPayload: Prisma.UserCreateInput) {
    // Verifica se o nome de usuário já está sendo utilizado
    const isUsernameTaken = await this.prisma.user.findUnique({
      where: { username: registerPayload.username },
    });
    // se sim, lança um erro de conflito
    if (isUsernameTaken) throw new ConflictException('Username taken');
    // codifica senha
    const pass = encodePassword(registerPayload.password);
    // troca a senha enviada pelo input pela senha codificada
    const data = { ...registerPayload, password: pass };
    // Cria o usuário
    const user = await this.prisma.user.create({ data });

    // gera os tokens
    const tokens = await this.generateTokens(user.id, user.username);
    // envia o refreshtoken ao banco de dados
    this.updateRefreshToken(user.id, tokens.refreshToken);

    // retorna os tokens
    return tokens;
  }
  // -------------------------------------------------- //

  // -------------------------------------------------- //
  // ---------- Gera os tokens ao fazer login --------- //
  // -------------------------------------------------- //
  async validateUser(username: string, pass: string) {
    // Busca usuário pelo nome de usuário
    const findUser = await this.prisma.user.findUnique({
      where: { username },
    });

    // se não encontra usuário, lança exceção "Usuário não existe"
    if (!findUser) throw new NotFoundException("User doesn't exist");

    // Confere se a senha é uma senha válida
    const isPasswordValid = comparePassword(pass, findUser.password);

    // se a senha não é válida, lança uma exceção "Senha incorreta"
    if (!isPasswordValid) throw new ForbiddenException('Incorrect Password');

    // gera os tokens
    const tokens = await this.generateTokens(findUser.id, findUser.username);

    // atualiza refresh token no banco de dados
    await this.updateRefreshToken(findUser.id, tokens.refreshToken);

    // retorna tokens na response da requisição.
    return tokens;
  }
  // -------------------------------------------------- //

  // -------------------------------------------------- //
  // ---- Limpa o Refresh token do usuário(Logout) ---- //
  // -------------------------------------------------- //
  async logoutUser(userId: number) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });

    return { message: 'Logout successful' };
  }
  // -------------------------------------------------- //

  // -------------------------------------------------- //
  // ------- Atualiza o Access token do usuário ------ //
  // -------------------------------------------------- //
  async refreshAccessToken(refreshToken: string) {
    try {
      // Verifica e decodifica o refresh token
      const decoded: { sub: number; username: string } =
        this.jwtService.verify(refreshToken);

      // Busca o usuário no banco de dados com base no id encontrado no refresh token passado na requisição
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      // Verifica se o usuário existe e se o refresh token corresponde ao armazenado no banco
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }
      // Verifica se o refresh token armazenado no banco de dados corresponde ao refresh token passado na requisição
      if (user.refreshToken !== refreshToken) {
        throw new ForbiddenException('Token inválido ou expirado');
      }

      // Gera novos tokens (access e refresh token)
      const tokens = await this.generateTokens(user.id, user.username);

      // Atualiza o refresh token no banco de dados
      await this.updateRefreshToken(user.id, tokens.refreshToken);

      // Retorna os tokens gerados
      return tokens;
    } catch (error) {
      // Caso o refresh token seja inválido ou expirado, lança uma exceção
      throw new UnauthorizedException('Refresh token inválido');
    }
  }
  // -------------------------------------------------- //

  // -------------------------------------------------- //
  // ---- Gera novos tokens (access/refresh token) ---- //
  // -------------------------------------------------- //
  public async generateTokens(userId: number, role: string) {
    const payload: { sub: number; role: string } = {
      sub: userId,
      role,
    };

    // Gera  o access token (expira em 3 minutos)
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '3m',
    });

    // Gera o refresh token (expira em 7 dias)
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d', // Tempo de expiração: 7 dias
    });

    // retorna ambos os tokens
    return { accessToken, refreshToken };
  }
  // -------------------------------------------------- //

  // -------------------------------------------------- //
  // -- Atualiza o refresh token armazenado no banco -- //
  // -------------------------------------------------- //
  private async updateRefreshToken(userId: number, refreshToken: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });
  }
}
