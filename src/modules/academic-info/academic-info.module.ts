import { Module } from '@nestjs/common';
import { AcademicInfoService } from './academic-info.service';
import { AcademicInfoController } from './academic-info.controller';

@Module({
  controllers: [AcademicInfoController],
  providers: [AcademicInfoService],
})
export class AcademicInfoModule {}
