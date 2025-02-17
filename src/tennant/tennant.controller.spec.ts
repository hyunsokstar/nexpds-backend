import { Test, TestingModule } from '@nestjs/testing';
import { TennantController } from './tennant.controller';
import { TennantService } from './tennant.service';

describe('TennantController', () => {
  let controller: TennantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TennantController],
      providers: [TennantService],
    }).compile();

    controller = module.get<TennantController>(TennantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
