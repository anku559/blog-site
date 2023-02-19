import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ORM_CONFIG from './config/orm';

@Module({
  imports: [TypeOrmModule.forRoot(ORM_CONFIG), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
