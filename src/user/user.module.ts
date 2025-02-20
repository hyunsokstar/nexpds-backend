import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService], // PrismaService 추가
  exports: [UserService], // 다른 모듈에서 UserService 사용 가능하도록 내보내기
})
export class UserModule {}
