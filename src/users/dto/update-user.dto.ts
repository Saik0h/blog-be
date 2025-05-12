import { $Enums, Prisma } from 'generated/prisma';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  firstname?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
  lastname?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
  password?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
  posts?: Prisma.PostUpdateManyWithoutAuthorNestedInput | undefined;
  role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role | undefined;
  username?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
}