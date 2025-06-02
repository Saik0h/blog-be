import { Test, TestingModule } from '@nestjs/testing';
import { AcademicInfoController } from './academic-info.controller';
import { AcademicInfoService } from './academic-info.service';

describe('AcademicInfoController', () => {
  let controller: AcademicInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicInfoController],
      providers: [AcademicInfoService],
    }).compile();

    controller = module.get<AcademicInfoController>(AcademicInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
