import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees?: any[];
  showTenured: boolean = false;
  showActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.fetchEmployees();
  }


  fetchEmployees(): void {
    // [Applicant] TODO: Fetch employees; fetch tenured employee IDs to set/map it in model

    //this.employeeService.getEmployees()
    //this.employeeService.getTenuredEmployees()
    this.employees = [
      {
        id: 1,
        firstName: "mock",
        lastName: "data",
        position: "none"
      }, {
        id: 2,
        firstName: "mock",
        lastName: "datatwo",
        position: "none"
      },
      {
        id: 3,
        firstName: "mock",
        lastName: "datathree",
        position: "none"
      }
    ];
  }

}
