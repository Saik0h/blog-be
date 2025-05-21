import { Prisma } from 'generated/prisma';

export class UpdatePostDto implements Prisma.PostUpdateInput {
    author?: Prisma.UserUpdateOneRequiredWithoutPostsNestedInput | undefined;
    createdAt?: string | Prisma.DateTimeFieldUpdateOperationsInput | Date | undefined;
    image?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
    references?: Prisma.PostUpdatereferencesInput | string[] | undefined;
    text?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
    title?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
    updatedAt?: string | Prisma.DateTimeFieldUpdateOperationsInput | Date | undefined;
}