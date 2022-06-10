import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app-core/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoginUserSuccess, ISessionStateModel } from '../../app-state/session';

@Component({
  selector: 'app-signin-redirect-callback',
  template: `<div></div>`
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private store: Store) { }

  ngOnInit(): void {
    this._authService.finishLogin()
      .then((user: any) => {
        debugger;
        let sessionStateModel = {
          access_token: user.access_token,
          refresh_token: null,
          user: {
            name: user.profile.name,
            email: user.profile.name,
            id: user.profile.sub
          }
        } as ISessionStateModel;
        this.store.dispatch(new LoginUserSuccess(sessionStateModel));
        this._router.navigate(['/main'], { replaceUrl: true });
      })
  }
}