import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TennantModule } from './tennant/tennant.module';
import { CampaignModule } from './campaign/campaign.module';
import { GroupModule } from './group/group.module';
import { TeamModule } from './team/team.module';
import { CounselorModule } from './counselor/counselor.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TennantModule, CampaignModule, GroupModule, TeamModule, CounselorModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
