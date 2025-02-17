import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TennantModule } from './tennant/tennant.module';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [TennantModule, CampaignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
