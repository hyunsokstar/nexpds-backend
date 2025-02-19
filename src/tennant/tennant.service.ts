import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TennantService {
  constructor(private readonly prisma: PrismaService) {}

  // ✅ 기본 "Hello" 반환
  getHello(): string {
    return 'Hello from Tennant Service!';
  }

  // ✅ 모든 테넌트 가져오기
  async getAllTennants() {
    return await this.prisma.tenant.findMany(); // Prisma에서 모든 Tenant 조회
  }

  async getAllTennantsWithCampaigns() {
    return await this.prisma.tenant.findMany({
      include: {
        campaigns: true, // ✅ 캠페인 정보 포함
      },
    });
  }
  
}
