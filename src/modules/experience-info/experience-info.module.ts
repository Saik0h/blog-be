import { Module } from '@nestjs/common';
import { ExperienceInfoService } from './experience-info.service';
import { ExperienceInfoController } from './experience-info.controller';

@Module({
  controllers: [ExperienceInfoController],
  providers: [ExperienceInfoService],
})
export class ExperienceInfoModule {}
