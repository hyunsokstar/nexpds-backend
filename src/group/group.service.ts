import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async getAllGroups() {
    return this.prisma.group.findMany({
      include: {
        teams: {
          include: {
            counselors: true
          }
        }
      }
    });
  }

  async createGroup(createGroupDto: CreateGroupDto) {
    return this.prisma.group.create({
      data: createGroupDto,
      include: {
        teams: true
      }
    });
  }
}