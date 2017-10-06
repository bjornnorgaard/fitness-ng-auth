import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';
import { Exercise } from '../../shared/class/exercises';
import { Workout } from '../../shared/class/workout';
import { FitnessService } from '../../shared/service/fitness.service';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workouts: Workout[];

  constructor(private fitnessService: FitnessService,
              private snackbar: MdSnackBar,
              private router: Router,
              private dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.fitnessService.getAllWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }

  logWorkout(id: number) {
    this.snackbar.open('Activity Logged', null, {duration: 1500});
    this.fitnessService.createLog(id);
  }

  createExercise(workoutId: number) {
    const dialogRef = this.dialog.open(ExerciseComponent);

    dialogRef.afterClosed().subscribe(result => {
      result.workoutId = workoutId;
      console.log('exercise name: ' + result.title);
      console.log('description: ' + result.description);
      console.log('sets: ' + result.sets);
      console.log('reps: ' + result.reps);

      this.addExercise(result);
    });
  }

  private addExercise(result: Exercise) {
    this.fitnessService.createExercise(result);

    this.snackbar.open('Exercise created: ' + result.title, null, {duration: 1500});

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
