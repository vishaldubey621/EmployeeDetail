import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class EmployeeFormPresenterService {
  public employeeData: Subject<any> = new Subject<any>();
  public employeeData$: Observable<any>;


   employeedetail(employeeForm: FormGroup) {
    this.employeeData .next(employeeForm.value);
  }

  constructor() {
    this.employeeData$  = this.employeeData.asObservable();
   }

  public bindForm() 
   {
      return new FormGroup({
      firstname: new  FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      birthdate: new FormControl(),
      gender : new FormControl(),
      department : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    });

   }
}
