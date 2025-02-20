import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // 모든 유저 조회
  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  // 유저 생성
  async createUser(data: CreateUserDto) {
    if (!data.tenantId) {
      throw new BadRequestException('tenantId는 필수 입력 값입니다.');
    }

    // 테넌트 존재 여부 확인
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: data.tenantId },
    });

    if (!tenant) {
      throw new BadRequestException('존재하지 않는 tenantId입니다.');
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }
}
