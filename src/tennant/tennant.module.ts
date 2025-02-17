import { Module } from '@nestjs/common';
import { TennantService } from './tennant.service';
import { TennantController } from './tennant.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  // PrismaModule 임포트
  imports: [PrismaModule],
  controllers: [TennantController],
  providers: [TennantService],
})
export class TennantModule {}
