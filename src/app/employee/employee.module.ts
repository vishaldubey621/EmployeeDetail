import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeFormPresentationComponent } from './employee-form-container/employee-form-presentation/employee-form-presentation.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import {OverlayModule} from '@angular/cdk/overlay';
import { FilterPipe } from '../shared/filter.pipe';
import { SortPipe } from '../shared/sort.pipe';
import { HighlightDirective } from '../shared/highlight.directive';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [EmployeeComponent, EmployeeFormContainerComponent, EmployeeListContainerComponent, EmployeeFormPresentationComponent, EmployeeListPresentationComponent,  FilterPipe,SortPipe,HighlightDirective],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  providers :[
    EmployeeService
  ]
  
})
export class EmployeeModule { }
