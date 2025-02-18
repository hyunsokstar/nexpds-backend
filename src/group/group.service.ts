import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  // 🔹 모든 그룹 조회 (findAll → getAllGroups)
  async getAllGroups() {
    return this.prisma.group.findMany();
  }

  // 🔹 새로운 그룹 생성 (create → createGroup)
  async createGroup(data: { name: string; tenantId: string }) {
    return this.prisma.group.create({ data });
  }
}
