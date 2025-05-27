-- CreateTable
CREATE TABLE "Curriculum" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "credential" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "academicInfoId" INTEGER,
    "teachingInfoId" INTEGER,
    "extras" JSONB NOT NULL,
    "singleton" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curriculum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "items" TEXT[],

    CONSTRAINT "AcademicInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeachingInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "items" TEXT[],

    CONSTRAINT "TeachingInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InboxMessage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InboxMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Curriculum_academicInfoId_key" ON "Curriculum"("academicInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "Curriculum_teachingInfoId_key" ON "Curriculum"("teachingInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "Curriculum_singleton_key" ON "Curriculum"("singleton");

-- AddForeignKey
ALTER TABLE "Curriculum" ADD CONSTRAINT "Curriculum_academicInfoId_fkey" FOREIGN KEY ("academicInfoId") REFERENCES "AcademicInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curriculum" ADD CONSTRAINT "Curriculum_teachingInfoId_fkey" FOREIGN KEY ("teachingInfoId") REFERENCES "TeachingInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
