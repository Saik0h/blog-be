import { Prisma } from 'generated/prisma';

export class CreatePostDto implements Prisma.PostCreateInput {
  author: Prisma.UserCreateNestedOneWithoutPostsInput;
  createdAt?: string | Date | undefined;
  image: string;
  references?: string[] | Prisma.PostCreatereferencesInput | undefined;
  text: string;
  title: string;
  updatedAt?: string | Date | undefined;
}
