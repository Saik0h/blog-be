import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { ContactInfoService } from '../contact-info/contact-info.service';
import { ExperienceInfoService } from '../experience-info/experience-info.service';
import { TeachingInfoService } from '../teaching-info/teaching-info.service';
import { AcademicInfoService } from '../academic-info/academic-info.service';

@Injectable()
export class CurriculumService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly contactSubservice: ContactInfoService,
    private readonly experienceSubservice: ExperienceInfoService,
    private readonly teachingSubservice: TeachingInfoService,
    private readonly academicSubservice: AcademicInfoService,
  ) {}

  async createCurriculum(data: Prisma.CurriculumCreateInput) {
    try {
      return await this.prisma.curriculum.create({ data });
    } catch (err) {
      throw err;
    }
  }

  async findCurriculum() {
    try {
      const raw = await this.prisma.curriculum.findUnique({
        where: { singleton: true },
      });

      return {
        firstname: raw!.firstname,
        lastname: raw!.lastname,
        profileImage: raw!.profileImage,
        jobTitle: raw!.jobTitle,
        credential: raw!.credential,
        contact_field: await this.contactSubservice.findField(),
        teaching_field: await this.teachingSubservice.findField(),
        academic_field: await this.academicSubservice.findField(),
        experiences_field: await this.experienceSubservice.findField(),
      };
    } catch (err) {
      throw err;
    }
  }

  async updatePersonalData(data: Prisma.CurriculumUpdateInput) {
    try {
      return await this.prisma.curriculum.update({
        where: { singleton: true },
        data,
      });
    } catch (err) {
      throw err;
    }
  }

  async removeCurriculum() {
    try {
      return await this.prisma.curriculum.delete({
        where: { singleton: true },
      });
    } catch (err) {
      throw err;
    }
  }
}
