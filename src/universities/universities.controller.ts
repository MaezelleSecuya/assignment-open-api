import { Controller, Get, Post, Put, Delete, Body, Query, BadRequestException } from '@nestjs/common';
import { UniversitiesService } from './universities.service';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}


  @Get()
  getUniversities(@Query('country') country: string) {
    return this.universitiesService.getUniversities(country);
  }

  @Post()
  createUniversity(@Body() university: any) {
    return this.universitiesService.createUniversity(university);
  }

  @Put()
  updateUniversity(@Query('name') name: string, @Body() updatedUniversity: any) {
    return this.universitiesService.updateUniversity(name, updatedUniversity);
  }

  @Delete()
deleteUniversity(@Body('name') name: string): string {
  if (!name) {
    throw new BadRequestException('University name is required in the body');
  }
  return this.universitiesService.deleteUniversity(name);
}


}
