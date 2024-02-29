import { Component, Input } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input () employee!:IEmployee;

}
