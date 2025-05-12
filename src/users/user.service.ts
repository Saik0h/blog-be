import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { encodePassword } from 'src/utils/bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: DatabaseService) {}

  // Retorna todos os usuários sem a senha
  async findAll() {
    try {
      const users = await this.prisma.user.findMany({});
      return this.removePasswordFromUsers(users);
    } catch (error) {
      throw new BadRequestException('Erro ao recuperar usuários');
    }
  }

  // Retorna um único usuário sem a senha
  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }
      return this.removePasswordFromUser(user);
    } catch (error) {
      throw new BadRequestException('Erro ao buscar usuário');
    }
  }

  // Retorna todos os posts de um autor específico
  async findAllByAuthor(id: number) {
    try {
      const posts = await this.prisma.post.findMany({
        where: { authorId: id },
      });
      if (!posts || posts.length === 0) {
        throw new NotFoundException('Nenhum post encontrado para este autor');
      }
      return posts;
    } catch (error) {
      throw new BadRequestException('Erro ao buscar posts');
    }
  }

  // Atualiza o usuário, codificando a senha se fornecida
  async update(id: number, updateUserDto: UpdateUserDto) {
    if (!updateUserDto.password) {
      return this.prisma.user.update({ where: { id }, data: updateUserDto });
    }

    const newPassword = encodePassword(updateUserDto.password.toString());
    return this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto, password: newPassword },
    });
  }

  // Remove um usuário
 async remove(id: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }
      return this.prisma.user.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException('Erro ao excluir usuário');
    }
  }

  // Função para remover a senha de um único usuário
  private removePasswordFromUser(user: any) {
    const { password, ...userWOP } = user;
    return userWOP;
  }

  // Função para remover a senha de vários usuários
  private removePasswordFromUsers(users: any[]) {
    return users.map(({ password, ...userWOP }) => userWOP);
  }
}
