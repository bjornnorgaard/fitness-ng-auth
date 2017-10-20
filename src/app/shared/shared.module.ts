import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './service/auth.service';
import { FitnessService } from './service/fitness.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    FitnessService,
    AuthService,
  ],
})
export class SharedModule {
}
