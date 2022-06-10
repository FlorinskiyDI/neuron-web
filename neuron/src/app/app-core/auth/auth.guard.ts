import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.checkIsUserAuthenticated();    
  }

  private checkIsUserAuthenticated() {
    return this._authService
      .isAuthenticated()
      .then(res => {
        return res ? true : this.redirectToUnauthorized();
      });
  }

  private redirectToUnauthorized() {
    this._router.navigate(['/login']);
    return false;
  }
}
