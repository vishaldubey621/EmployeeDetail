import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { LoginGuard } from '../login.guard';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeeComponent, 
    children: [ 
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: "",
        component: EmployeeListContainerComponent
      },
      {
        path: "add",
        component: EmployeeFormContainerComponent
      }
    
    
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
