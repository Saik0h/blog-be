import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { encodePassword } from 'src/common/utils/bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'generated/prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: DatabaseService) {}

  // Retorna todos os usuários sem a senha
  async findAll() {
    try {
      const users = await this.prisma.user.findMany({});
      if (!users) throw new NotFoundException('There are no users yet');
      return this.removeSensitiveDataFromUsers(users);
    } catch (error) {
      throw new BadRequestException('Cannot retrieve users');
    }
  }

  // Retorna um único usuário sem a senha
  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException('User Not Found');
      }
      return this.removeSensitiveDataFromUser(user);
    } catch (err) {
      throw new BadRequestException('Cannot find user');
    }
  }

  // Retorna todos os posts de um autor específico
  async findAllByAuthor(id: number) {
    try {
      const posts = await this.prisma.post.findMany({
        where: { authorId: id },
      });
      if (!posts || posts.length === 0) {
        throw new NotFoundException(
          'No content created by this author was found',
        );
      }
      return posts;
    } catch (err) {
      throw new BadRequestException('Erro ao buscar posts');
    }
  }

  // Atualiza o usuário
  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      if (!id) throw new BadRequestException('User must be provided');
      if (!updateUserDto) throw new BadRequestException('Changes must be made');
      if (updateUserDto.password) {
        const hashedPassword = encodePassword(
          updateUserDto.password.toString(),
        );
        updateUserDto.password = hashedPassword;
        return this.prisma.user.update({ where: { id }, data: updateUserDto });
      }
      return this.prisma.user.update({ where: { id }, data: updateUserDto });
    } catch (err) {
      throw new BadRequestException("Error updating user data")
    }
  }

  // Remove um usuário
  async remove(id: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }
      return this.prisma.user.delete({ where: { id } });
    } catch (err) {
      throw new BadRequestException('Erro ao excluir usuário');
    }
  }

  // Função para remover dados sensíveis de um único usuário
  private removeSensitiveDataFromUser(user: User) {
    const { password, refreshToken, profileImage, username, ...userWOP } = user;
    return userWOP;
  }

  // Função para remover dados sensíveis de vários usuários
  private removeSensitiveDataFromUsers(users: User[]) {
    return users.map(({ password, refreshToken, profileImage, username, ...usersWOP }) => usersWOP);
  }
}
