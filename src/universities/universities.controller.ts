import { Controller, Get, Query } from '@nestjs/common';
import { UniversitiesService } from './universities.service';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Get()
  async getUniversities(@Query('country') country: string) {
    // Call the service function to get universities in the specified country
    return this.universitiesService.getUniversities(country);
  }
}
