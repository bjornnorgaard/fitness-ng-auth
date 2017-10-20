import { Component, OnInit } from '@angular/core';
import {FitnessService} from '../../shared/service/fitness.service';
import {AuthService} from "../../shared/service/auth.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public userName: string;
  public password: string;

  constructor(private authService: AuthService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  createUser() {
    this.authService.register(this.userName, this.password);
  }
}
