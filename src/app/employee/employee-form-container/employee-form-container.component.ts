import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.css']
})
export class EmployeeFormContainerComponent implements OnInit {

  constructor(private EmployeeService : EmployeeService) { }
  public addemployeeData(value: Employee) {
  
    this.EmployeeService.addemployee(value)
    console.log(value);

  }

  ngOnInit(): void {
  }

}
