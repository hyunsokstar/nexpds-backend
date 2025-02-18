import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [GroupController],
  providers: [GroupService, PrismaService], // ✅ PrismaService 등록
})
export class GroupModule {}
