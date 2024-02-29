import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../models/employee.model';

@Injectable({
  providedIn:'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }
  //privateURLs
  private URL_EMPLOYEES = '../assets/data/employees.json';
  private URL_TENURED_ID = '../assets/data/tenured_ids.json';

  // [Applicant] TODO: Create method to fetch tenured employee IDs
  getTenuredEmployees(): Observable<number[]> {
    return this.http.get(this.URL_TENURED_ID) as Observable<number[]>
  }

  // [Applicant] TODO: Create method to fetch all employees
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get(this.URL_EMPLOYEES) as Observable<IEmployee[]>
  }

}
