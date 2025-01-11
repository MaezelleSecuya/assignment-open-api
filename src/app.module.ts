import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities/universities.service';
import { UniversitiesController } from './universities/universities.controller';
import { HttpModule } from '@nestjs/axios';



@Module({
  imports: [HttpModule], 
  providers: [UniversitiesService],
  controllers: [UniversitiesController],
})
export class AppModule {}
