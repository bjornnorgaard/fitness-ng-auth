import { Component, OnInit } from '@angular/core';
import {AuthService} from './shared/service/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {

  }

  loggedInUserName() {
    return this.authService.currentUser().username;
  }

  signout() {
    this.authService.signOut();
    this.router.navigate(['*']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
