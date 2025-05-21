import { $Enums, Prisma } from 'generated/prisma';

export class CreateUserDto implements Prisma.UserCreateInput {
  firstname: string;
  lastname: string;
  password: string;
  posts?: Prisma.PostCreateNestedManyWithoutAuthorInput | undefined;
  role?: $Enums.Role | undefined;
  username: string;
}
