import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnChanges {
  @Input() employee!: IEmployee;
  @Input() showTenured!: boolean;
  @Input() showActive!: boolean;
  @Output() newEventTrigger = new EventEmitter<string>();

  constructor() {}

  ngOnChanges() {
    this.doSomething(this.showTenured, this.showActive);
  }

  private doSomething(tenured: boolean, active: boolean) {
    setTimeout(() => {
      let obj: any = {
        tenured,
        active,
      };
      this.newEventTrigger.emit(obj);
    }, 0);
  }
}
