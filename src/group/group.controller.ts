import { Controller, Post, Body, Get } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  async getAllGroups() {
    return await this.groupService.getAllGroups();
  }

  @Post()
  async createGroup(@Body() createGroupDto: CreateGroupDto) {
    return await this.groupService.createGroup(createGroupDto);
  }
}