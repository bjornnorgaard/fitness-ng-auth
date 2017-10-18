import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { WorkoutComponent } from './home/workout/workout.component';
import { LoginComponent} from './user/login/login.component';
import { NewUserComponent} from './user/new-user/new-user.component';
import { ExerciseComponent } from './home/exercise/exercise.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'workout', component: WorkoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-user', component: NewUserComponent },
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
