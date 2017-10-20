import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../class/authresponse';
import { User } from '../class/user';
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  private baseUrl = environment.fitnessApiUrl;

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar,
              private router: Router) {
  }

  register(name: string, password: string) {
    const user = new User(name, password);
    const url = `${this.baseUrl}/register`;
    this.http.post<string>(url, user).subscribe(data => {
        console.log('User was created successfully' + data);
        this.snackbar.open(data, null, {duration: 1500});
        return true;
      },
      // Errors will call this callback instead:
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
          alert('An error occurred:' + err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          alert(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        return false;
      });
  }

  login(name: string, password: string) {
    const user = new User(name, password);
    const url = `${this.baseUrl}/login`;
    this.http.post<AuthResponse>(url, user).subscribe(data => {
        console.log('Login successful: ' + data.msg);
        this.snackbar.open(data.msg, null, {duration: 1500});
        this.saveToken(data.token);
        this.router.navigate(['*']);
        return true;
      },
      // Errors will call this callback instead:
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
          alert('An error occurred:' + err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          alert(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        return false;
      });
  }

  public saveToken(token: string) {
    window.localStorage['fitness-token'] = token;
  }

  public getToken() {
    if (window.localStorage['fitness-token']) {
      // console.log('GetToken called: ' + window.localStorage['fitness-token']);
      return window.localStorage['fitness-token'];
    } else {
      return '';
    }
  }

  public currentUser(): User {
    if (this.isLoggedIn()) {
      const token = this.getToken();
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      console.log('currentuser: ' + payload.username + '' + payload.name);
      return new User(payload.username, payload.name);
    } else {
      return;
    }
  }

  public isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      // console.log('Is user is logged in: ' + (payload.exp > Date.now() / 1000));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public signOut() {
    window.localStorage['fitness-token'] = '';
  }
}
