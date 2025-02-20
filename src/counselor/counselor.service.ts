import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCounselorDto } from './dto/create-counselor.dto';

@Injectable()
export class CounselorService {
  constructor(private prisma: PrismaService) {}

  // 전체 상담사 목록 조회
  async getAllCounselors() {
    return await this.prisma.counselor.findMany({
      include: {
        team: true,
        user: true, // 상담사와 연결된 사용자 정보 포함
      },
    });
  }

  // 상담사 등록
  async createCounselor(data: CreateCounselorDto) {
    return await this.prisma.counselor.create({
      data,
    });
  }
}
