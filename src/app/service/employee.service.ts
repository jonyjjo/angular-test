import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  // [Applicant] TODO: Create method to fetch tenured employee IDs
  getTenuredEmployees(): Observable<number[]> {
    return of([]);
  }

  // [Applicant] TODO: Create method to fetch all employees
  getEmployees(): Observable<any[]> {
    return of([]);
  }

}
