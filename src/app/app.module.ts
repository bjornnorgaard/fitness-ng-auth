import { NgMaterialModule } from './ng-material/ng-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ExerciseComponent } from './home/exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialModule,
    SharedModule,
    HomeModule,
  ],
  providers: [],
  entryComponents: [
    ExerciseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
