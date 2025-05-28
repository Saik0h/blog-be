/*
  Warnings:

  - A unique constraint covering the columns `[contactInfoId]` on the table `Curriculum` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Curriculum" ADD COLUMN     "contactInfoId" INTEGER;

-- CreateTable
CREATE TABLE "ContactInfoItem" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "platform" TEXT,
    "contactInfoId" INTEGER NOT NULL,

    CONSTRAINT "ContactInfoItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "ContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Curriculum_contactInfoId_key" ON "Curriculum"("contactInfoId");

-- AddForeignKey
ALTER TABLE "Curriculum" ADD CONSTRAINT "Curriculum_contactInfoId_fkey" FOREIGN KEY ("contactInfoId") REFERENCES "ContactInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactInfoItem" ADD CONSTRAINT "ContactInfoItem_contactInfoId_fkey" FOREIGN KEY ("contactInfoId") REFERENCES "ContactInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
