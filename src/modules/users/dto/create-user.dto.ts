import { $Enums, Prisma } from 'generated/prisma';

export class CreateUserDto implements Prisma.UserCreateInput {
  firstname: string;
  lastname: string;
  password: string;
  articles?: Prisma.ArticleCreateNestedManyWithoutAuthorInput | undefined;
  blogs?: Prisma.BlogCreateNestedManyWithoutAuthorInput | undefined;
  courses?: Prisma.CourseCreateNestedManyWithoutAuthorInput | undefined;
  materials?: Prisma.MaterialCreateNestedManyWithoutAuthorInput | undefined;
  profileImage?: string | null | undefined;
  refreshToken?: string | null | undefined;
  role?: $Enums.Role | undefined;
  username: string;
}
