import { Controller, Get, Post, Body } from '@nestjs/common';
import { CounselorService } from './counselor.service';
import { CreateCounselorDto } from './dto/create-counselor.dto';

@Controller('counselor')
export class CounselorController {
  constructor(private readonly counselorService: CounselorService) {}

  // 전체 상담사 목록 조회
  @Get()
  async getAllCounselors() {
    return await this.counselorService.getAllCounselors();
  }

  // 상담사 등록
  @Post()
  async createCounselor(@Body() createCounselorDto: CreateCounselorDto) {
    return await this.counselorService.createCounselor(createCounselorDto);
  }
}
