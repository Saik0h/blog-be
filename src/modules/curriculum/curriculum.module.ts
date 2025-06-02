import { Module } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CurriculumController } from './curriculum.controller';
import { ContactInfoService } from '../contact-info/contact-info.service';
import { ExperienceInfoService } from '../experience-info/experience-info.service';
import { AcademicInfoService } from '../academic-info/academic-info.service';
import { TeachingInfoService } from '../teaching-info/teaching-info.service';

@Module({
  controllers: [CurriculumController],
  providers: [
    CurriculumService,
    ContactInfoService,
    ExperienceInfoService,
    AcademicInfoService,
    TeachingInfoService,
  ],
})
export class CurriculumModule {}
