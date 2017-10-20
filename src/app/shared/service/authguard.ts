import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  public canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    return false;
  }
}
