import { Test, TestingModule } from '@nestjs/testing';
import { AcademicInfoService } from './academic-info.service';

describe('AcademicInfoService', () => {
  let service: AcademicInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademicInfoService],
    }).compile();

    service = module.get<AcademicInfoService>(AcademicInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
