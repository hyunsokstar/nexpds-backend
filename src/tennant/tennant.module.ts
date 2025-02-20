import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { TenantController } from './tennant.controller';
import { TenantService } from './tennant.service';

@Module({
  // PrismaModule 임포트
  imports: [PrismaModule],
  controllers: [TenantController],
  providers: [TenantService],
})
export class TennantModule {}
