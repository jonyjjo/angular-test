import { Component, OnInit } from '@angular/core';
import { forkJoin, map, switchMap } from 'rxjs';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees?: any[];
  clonedEmployees?: any[];
  showTenured: boolean = false;
  showActive: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }


  fetchEmployees(): void {
    // [Applicant] TODO: Fetch employees; fetch tenured employee IDs to set/map it in model
    this.employeeService.getEmployees().subscribe((data)=>{
      this.employees = data;
      
    })

    this.employeeService.getTenuredEmployees().subscribe((data: any)=>{
      this.employees = this.employees?.map((v,i) => {
        if(data.ids.includes(v.id)) {
          v.isTenured = true;
        } else {
          v.isTenured = false;
        }
        return v;
      })
      this.clonedEmployees = JSON.parse(JSON.stringify( this.employees ));
    })

  }

  showTenuredEmployees(): void {
    if(this.showTenured){
      this.clonedEmployees = this.clonedEmployees?.filter((v)=> v.isTenured === true);
    }else {
      this.clonedEmployees = this.employees;
    }
  }

  showActiveEmployees(): void {
    if(this.showActive){
      this.clonedEmployees = this.clonedEmployees?.filter((v)=> v.isActive === true);
    }else {
      this.clonedEmployees = this.employees;
    }
  }
}
