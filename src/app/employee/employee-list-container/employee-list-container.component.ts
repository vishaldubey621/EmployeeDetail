import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css']
})
export class EmployeeListContainerComponent implements OnInit {

  public employeeList$: Observable<any>;

  constructor(private EmployeeService: EmployeeService) {
  
    this.employeeList$ = this.EmployeeService.getEmployee();
    
  }

  ngOnInit(): void {
  }
  public onDeleteId(id: number) {
    this.EmployeeService.deleteEmployee(id)

}
}