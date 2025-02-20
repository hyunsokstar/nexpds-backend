import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { TenantService } from './tennant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  async create(@Body() createTenantDto: CreateTenantDto) {
    return await this.tenantService.create(createTenantDto);
  }

  @Get()
  async getTenantHierarchy() {
    return await this.tenantService.getTenantHierarchy();
  }
}