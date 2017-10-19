import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';


@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [NewUserComponent, LoginComponent]
})
export class UserModule { }
