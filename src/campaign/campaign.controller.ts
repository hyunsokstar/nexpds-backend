import { Controller, Get, Param } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  // ✅ 모든 캠페인 조회 API
  @Get()
  async getAllCampaigns() {
    return await this.campaignService.getAllCampaigns();
  }

  // ✅ 특정 테넌트의 캠페인 조회 API
  @Get(':tenantId')
  async getCampaignsByTenant(@Param('tenantId') tenantId: string) {
    return await this.campaignService.getCampaignsByTenant(tenantId);
  }
}
