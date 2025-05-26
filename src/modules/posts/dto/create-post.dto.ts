import { $Enums, Prisma } from 'generated/prisma';

export class CreatePostDto implements Prisma.PostCreateInput {
  author: Prisma.UserCreateNestedOneWithoutPostsInput;
  category?: $Enums.PostCategory | undefined;
  createdAt?: string | Date | undefined;
  image: string;
  references?: string[] | Prisma.PostCreatereferencesInput | undefined;
  text: string;
  title: string;
  updatedAt?: string | Date | undefined;
}
