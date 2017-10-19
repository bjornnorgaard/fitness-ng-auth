import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { WorkoutComponent } from './home/workout/workout.component';
import { LoginComponent} from './user/login/login.component';
import { NewUserComponent} from './user/new-user/new-user.component';
import { ExerciseComponent } from './home/exercise/exercise.component';
import {AuthGuard} from "./shared/service/authguard";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'workout', component: WorkoutComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'create-user', component: NewUserComponent },
  {path: '**', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
