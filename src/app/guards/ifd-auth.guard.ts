import { AuthService } from 'src/app/services/auth.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IfdAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('IfdAuthGuard#canActivate called');
    const isLoggedIn = this.authService.isLoggedIn;
    if (!isLoggedIn) return this.negateAccess();

    const hasRsiAccess = this.authService.userRoles.includes('ifd');

    if (!hasRsiAccess) return this.negateAccess();
    return true;
  }

  negateAccess(): boolean {
    this.router.navigateByUrl('/sign-in');
    return false;
  }
}
