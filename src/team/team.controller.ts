import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  // 모든 팀 목록 가져오기
  @Get()
  async fetchAllTeams() {
    return await this.teamService.retrieveAllTeams();
  }

  // 새로운 팀 생성 (특정 그룹에 추가)
  @Post()
  async registerNewTeam(@Body() createTeamDto: CreateTeamDto) {
    return await this.teamService.addTeamToGroup(createTeamDto);
  }
}
