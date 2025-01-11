import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UniversitiesService {
  constructor(private httpService: HttpService) {}

  // Read (GET) - Fetch universities in a specific country
  getUniversities(country: string): Observable<any> {
    return this.httpService
      .get(`http://universities.hipolabs.com/search?country=philippines`)
      .pipe(
        map((response) => response.data), // Map the response to get the data
        catchError((error) => {
          console.error('Error fetching universities:', error);
          throw new Error('Error fetching universities');
        }),
      );
  }

  // Create (POST) - Add a new university (example: to a local database)
  createUniversity(university: any): Observable<any> {
    return this.httpService
      .post('http://universities.hipolabs.com/search?country=philippines')
      .pipe(
        map((response) => response.data), // Map the response to get the data
        catchError((error) => {
          console.error('Error creating university:', error);
          throw new Error('Error creating university');
        }),
      );
  }

  // Update (PUT) - Update an existing university
  updateUniversity(id: string, university: any): Observable<any> {
    return this.httpService
      .put('http://universities.hipolabs.com/search?country=philippines')
      .pipe(
        map((response) => response.data), // Map the response to get the data
        catchError((error) => {
          console.error('Error updating university:', error);
          throw new Error('Error updating university');
        }),
      );
  }

  // Delete (DELETE) - Delete a university
  deleteUniversity(id: string): Observable<any> {
    return this.httpService
      .delete('http://universities.hipolabs.com/search?country=philippines')
      .pipe(
        map((response) => response.data), // Map the response to get the data
        catchError((error) => {
          console.error('Error deleting university:', error);
          throw new Error('Error deleting university');
        }),
      );
  }
}
