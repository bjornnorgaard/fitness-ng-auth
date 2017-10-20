import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';

export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  public canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
