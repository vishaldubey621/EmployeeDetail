import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeFormContainerComponent } from '../employee-form-container.component';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.css'],
  viewProviders: [EmployeeFormPresenterService]
})
export class EmployeeFormPresentationComponent implements OnInit {
  [x: string]: any;
public Department = ['food','Agnronomy','Environment','Animals','Natural Resources'];
@Output() employeeData : EventEmitter<any> = new EventEmitter<any>();
maxDate :any;

 //futuredate disable
futureDateDisable()
{
  var date : any = new Date();
  var todayDate :any = date.getDate();
  var month : any = date.getMonth() + 1 ;
  var year : any = date.getFullYear();
  if(todayDate < 10)
  {
    todayDate =  '0' + todayDate;
  }
  if(month < 10)
  {
    month =  '0' + month;
  }
  this.maxDate = year + "-"  + month + "-" + todayDate;
}

  constructor(private EmployeeFormPresenterService : EmployeeFormPresenterService) { }
  public employeeForm: FormGroup = this.EmployeeFormPresenterService.bindForm();
  public onSubmit()
  {
      this.EmployeeFormPresenterService.employeedetail(this.employeeForm);    
  }
  
 ngOnInit(): void {
    this.futureDateDisable();
    this.EmployeeFormPresenterService.employeeData.subscribe((employeeData: Employee) => {
     
      this.employeeData.emit(employeeData)
  })
  
  }

}
