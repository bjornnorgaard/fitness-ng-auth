import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FitnessService } from './service/fitness.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './service/authguard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [FitnessService, AuthService]
})
export class SharedModule {
}
