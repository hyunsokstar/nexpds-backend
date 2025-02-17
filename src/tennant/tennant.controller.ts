import { Controller, Get } from '@nestjs/common';
import { TennantService } from './tennant.service';

@Controller('tennant')
export class TennantController {
  constructor(private readonly tennantService: TennantService) {}

  // ✅ 기본 "Hello" 응답
  @Get('hello')
  getHello(): string {
    return this.tennantService.getHello();
  }

  // ✅ 모든 테넌트 가져오기 (리스트 요청)
  @Get()
  async getAllTennants() {
    return await this.tennantService.getAllTennants();
  }

  // ✅ 테넌트 + 캠페인 리스트 조회 API
  @Get('with-campaigns')
  async getAllTennantsWithCampaigns() {
    return await this.tennantService.getAllTennantsWithCampaigns();
  }

}
