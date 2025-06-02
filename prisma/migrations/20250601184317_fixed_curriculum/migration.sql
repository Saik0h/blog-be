/*
  Warnings:

  - You are about to drop the column `items` on the `AcademicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `extras` on the `Curriculum` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Curriculum` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Curriculum` table. All the data in the column will be lost.
  - You are about to drop the column `items` on the `TeachingInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[singleton]` on the table `AcademicInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[singleton]` on the table `ContactInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[experienceInfoId]` on the table `Curriculum` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[singleton]` on the table `TeachingInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstname` to the `Curriculum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Curriculum` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AcademicInfo" DROP COLUMN "items",
ADD COLUMN     "singleton" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "ContactInfo" ADD COLUMN     "singleton" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Curriculum" DROP COLUMN "extras",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "experienceInfoId" INTEGER,
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TeachingInfo" DROP COLUMN "items",
ADD COLUMN     "singleton" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "AcademicInfoItem" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "academicInfoId" INTEGER NOT NULL,

    CONSTRAINT "AcademicInfoItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeachingInfoItem" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "teachingInfoId" INTEGER NOT NULL,

    CONSTRAINT "TeachingInfoItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperienceInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "singleton" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ExperienceInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperienceInfoItem" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "experienceInfoId" INTEGER NOT NULL,

    CONSTRAINT "ExperienceInfoItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExperienceInfo_singleton_key" ON "ExperienceInfo"("singleton");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicInfo_singleton_key" ON "AcademicInfo"("singleton");

-- CreateIndex
CREATE UNIQUE INDEX "ContactInfo_singleton_key" ON "ContactInfo"("singleton");

-- CreateIndex
CREATE UNIQUE INDEX "Curriculum_experienceInfoId_key" ON "Curriculum"("experienceInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "TeachingInfo_singleton_key" ON "TeachingInfo"("singleton");

-- AddForeignKey
ALTER TABLE "Curriculum" ADD CONSTRAINT "Curriculum_experienceInfoId_fkey" FOREIGN KEY ("experienceInfoId") REFERENCES "ExperienceInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcademicInfoItem" ADD CONSTRAINT "AcademicInfoItem_academicInfoId_fkey" FOREIGN KEY ("academicInfoId") REFERENCES "AcademicInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachingInfoItem" ADD CONSTRAINT "TeachingInfoItem_teachingInfoId_fkey" FOREIGN KEY ("teachingInfoId") REFERENCES "TeachingInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperienceInfoItem" ADD CONSTRAINT "ExperienceInfoItem_experienceInfoId_fkey" FOREIGN KEY ("experienceInfoId") REFERENCES "ExperienceInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
