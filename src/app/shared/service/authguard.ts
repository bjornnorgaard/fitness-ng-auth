import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  public canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    return false;
  }
}
