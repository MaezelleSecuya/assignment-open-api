import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UniversitiesService {
  private universities: any[] = []; 

  // (GET) 
  getUniversities(country: string): any[] {
    return this.universities.filter((university) => university.country === country);
  }

  // (POST) 
  createUniversity(university: any): any {
    this.universities.push(university);
    return university;
  }

  // (PUT) 
  updateUniversity(name: string, updatedUniversity: any): any {
    const index = this.universities.findIndex((univ) => univ.name === name);
    if (index === -1) {
      throw new Error('University not found');
    }
    this.universities[index] = { ...this.universities[index], ...updatedUniversity };
    return this.universities[index];
  }

 // Delete (DELETE) 
 deleteUniversity(name: string): string {
    const index = this.universities.findIndex((univ) => univ.name === name);
    if (index === -1) {
      throw new NotFoundException(`University with name ${name} not found`);
    }
    this.universities.splice(index, 1); 
    return `University ${name} deleted successfully.`;
  }
}
