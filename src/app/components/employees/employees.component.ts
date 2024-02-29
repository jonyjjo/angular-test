import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees?: any[];
  clonedEmployees?: any[];
  showTenured: boolean = false;
  showActive: boolean = false;
  trackBy: any = 'id';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: IEmployee[]) => {
      this.employees = data;
    });

    this.employeeService.getTenuredEmployees().subscribe((data: any) => {
      this.employees = this.employees?.map((v, i) => {
        if (data?.ids.includes(v.id)) {
          v.isTenured = true;
        } else {
          v.isTenured = false;
        }
        return v;
      });
      this.clonedEmployees = JSON.parse(JSON.stringify(this.employees));
    });
  }

  changeTracker(e: any) {
    if (e.tenured && !e.active) {
      this.clonedEmployees = this.employees?.filter(
        (v) => v.isTenured === true
      );
    } else if (!e.tenured && e.active) {
      this.clonedEmployees = this.employees?.filter((v) => v.isActive === true);
    } else if (e.tenured && e.active) {
      this.clonedEmployees = this.employees?.filter(
        (v) => v.isTenured === true && v.isActive === true
      );
    } else {
      this.clonedEmployees = this.employees;
    }
  }
}
