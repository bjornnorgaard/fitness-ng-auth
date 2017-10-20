import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './service/auth.service';
import { FitnessService } from './service/fitness.service';
import { AuthGuard } from './service/authguard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FitnessService,
    AuthService,
    AuthGuard,
  ],
})
export class SharedModule {
}
