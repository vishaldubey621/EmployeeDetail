import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoinContainerComponent } from './loin-container/loin-container.component';
import { LoginPresentationComponent } from './loin-container/login-presentation/login-presentation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, LoinContainerComponent, LoginPresentationComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
})
export class LoginModule { }
