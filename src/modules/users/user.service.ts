import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { comparePassword, encodePassword } from 'src/common/utils/bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'generated/prisma';
import { ChangePasswordDto } from './dto/change-password.dto';
import { DecodedJWT } from 'src/common/utils/decoded';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(private readonly prisma: DatabaseService) { }

  async findAll() {
    try {
      const users = await this.prisma.user.findMany({});
      if (!users) throw new NotFoundException('There are no users yet');
      return this.removeSensitiveDataFromUsers(users);
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException('User Not Found');
      }
      return this.removeSensitiveDataFromUser(user);
    } catch (err) {
      throw err;
    }
  }

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
      throw err;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      if (!id) throw new BadRequestException('User must be provided');
      if (!updateUserDto) throw new BadRequestException('Changes must be made');
      if (updateUserDto.password) {
        throw new BadRequestException('Password changes must not be made here');
      }
      await this.prisma.user.update({ where: { id }, data: updateUserDto });
      return { message: 'Updated Succesfuly!' };
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }
      return this.prisma.user.delete({ where: { id } });
    } catch (err) {
      throw err;
    }
  }

  async changePassword(req: Request, payload: ChangePasswordDto) {
    try {
      const u = req.user! as DecodedJWT;
      const id = u.sub;
      console.log(id);
      const user = await this.prisma.user.findUnique({ where: { id } });
      const currentPassword = user!.password;
      if (payload.newPassword !== payload.newPasswordConfirmation)
        throw new BadRequestException('Passwords dont match');
      if (!comparePassword(payload.currentPassword, currentPassword))
        throw new ForbiddenException('Incorrect Password');
      if (payload.newPassword === currentPassword)
        throw new ConflictException('Password cannot be the same as before');

      const encodedPassword = encodePassword(payload.newPassword);
      await this.prisma.user.update({
        where: { id: id },
        data: { password: encodedPassword },
      });

      return { message: 'Password Updated Succsessfully' };
    } catch (err) {
      throw err;
    }
  }

  private removeSensitiveDataFromUser(user: User) {
    const { password, refreshToken, profileImage, username, ...userWOP } = user;
    return userWOP;
  }

  private removeSensitiveDataFromUsers(users: User[]) {
    return users.map(
      ({ password, refreshToken, profileImage, username, ...usersWOP }) =>
        usersWOP,
    );
  }
}
