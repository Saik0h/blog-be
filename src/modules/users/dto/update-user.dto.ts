import { $Enums, Prisma } from 'generated/prisma';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  firstname?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
  lastname?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
  password?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
  articles?: Prisma.ArticleUpdateManyWithoutAuthorNestedInput | undefined;
  blogs?: Prisma.BlogUpdateManyWithoutAuthorNestedInput | undefined;
  courses?: Prisma.CourseUpdateManyWithoutAuthorNestedInput | undefined;
  materials?: Prisma.MaterialUpdateManyWithoutAuthorNestedInput | undefined;
  profileImage?:
    | string
    | Prisma.NullableStringFieldUpdateOperationsInput
    | null
    | undefined;
  refreshToken?:
    | string
    | Prisma.NullableStringFieldUpdateOperationsInput
    | null
    | undefined;
  role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role | undefined;
  username?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
}
