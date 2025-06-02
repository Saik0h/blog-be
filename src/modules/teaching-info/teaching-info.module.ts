import { Module } from '@nestjs/common';
import { TeachingInfoService } from './teaching-info.service';
import { TeachingInfoController } from './teaching-info.controller';

@Module({
  controllers: [TeachingInfoController],
  providers: [TeachingInfoService],
})
export class TeachingInfoItemModule {}
