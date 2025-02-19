import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CampaignService {
  constructor(private readonly prisma: PrismaService) {}

  // ✅ 모든 캠페인 조회
  async getAllCampaigns() {
    return await this.prisma.campaign.findMany();
  }

  // ✅ 특정 테넌트의 캠페인 조회
  async getCampaignsByTenant(tenantId: string) {
    return await this.prisma.campaign.findMany({
      where: { tenantId },
    });
  }
}
