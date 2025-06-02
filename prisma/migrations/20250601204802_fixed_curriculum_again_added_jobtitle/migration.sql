/*
  Warnings:

  - Added the required column `jobTitle` to the `Curriculum` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curriculum" ADD COLUMN     "jobTitle" TEXT NOT NULL;
