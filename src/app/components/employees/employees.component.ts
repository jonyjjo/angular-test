import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{
  employees?: IEmployee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }


  fetchEmployees(): void {
    // [Applicant] TODO: Fetch employees, then fetch tenured employee IDs to set/map it in model

    //this.employeeService.getEmployeeID
    //this.employeeService.getEmployee(employeeID)
    this.employees = [{
      id: 1,
      firstName: "mock",
      lastName: "data",
      position: "none"
    }];
  }

}
