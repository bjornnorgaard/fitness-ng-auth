import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './home/exercise/exercise.component';
import { HomeModule } from './home/home.module';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialModule,
    SharedModule,
    UserModule,
    MatIconModule,
    HomeModule,
    SharedModule,
  ],
  entryComponents: [
    ExerciseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
