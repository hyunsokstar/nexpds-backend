import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  // 모든 팀 목록 조회
  async retrieveAllTeams() {
    return await this.prisma.team.findMany();
  }

  // 특정 그룹에 새로운 팀 추가
  async addTeamToGroup(createTeamDto: CreateTeamDto) {
    return await this.prisma.team.create({
      data: {
        name: createTeamDto.name,
        groupId: createTeamDto.groupId,
      },
    });
  }
}
