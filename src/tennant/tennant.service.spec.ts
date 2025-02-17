import { Test, TestingModule } from '@nestjs/testing';
import { TennantService } from './tennant.service';

describe('TennantService', () => {
  let service: TennantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TennantService],
    }).compile();

    service = module.get<TennantService>(TennantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
