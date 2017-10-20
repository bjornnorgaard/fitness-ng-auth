import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './service/authintercepter';
import { FitnessService } from './service/fitness.service';
import {NgMaterialModule} from '../ng-material/ng-material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgMaterialModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    FitnessService,
    AuthService,
  ],
})
export class SharedModule {
}
