import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings, WebStorageStateStore } from 'oidc-client';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _userManager: UserManager;
  private _user: User|null = null;
  private _loginChangedSubject = new Subject<boolean>();

  public loginChanged = this._loginChangedSubject.asObservable();

  private get idpSettings() : UserManagerSettings {
    return {
      authority: environment.host_authService,
      client_id: environment.auth_clientId,
      redirect_uri: `${environment.auth_clientRoot}/identity/signin-callback`,
      scope: environment.auth_scope,
      response_type: environment.auth_responseType,
      post_logout_redirect_uri: `${environment.auth_clientRoot}/identity/signout-callback`,
      automaticSilentRenew: true,
      silent_redirect_uri: `${environment.auth_clientRoot}/assets/silent-callback.html`,
      userStore: new WebStorageStateStore({ store: window.localStorage })
    }
  }

  constructor() { 
    this._userManager = new UserManager(this.idpSettings);
    this._userManager.events.addAccessTokenExpired(_ => {
      this._loginChangedSubject.next(false);
    });
  }

  public login = () => {
    return this._userManager.signinRedirect();
  }

  public isAuthenticated = (): Promise<boolean> => {
    return this._userManager.getUser()
    .then(user => {
      if(this._user !== user) {
        this._loginChangedSubject.next(this.checkUser(user));
      }

      this._user = user;

      return this.checkUser(user);
    })
  }

  public finishLogin = (): Promise<User> => {
    return this._userManager.signinRedirectCallback()
    .then(user => {
      this._loginChangedSubject.next(this.checkUser(user));
      return user;
    })
  }

  public logout = () => {
    this._userManager.signoutRedirect();
  }

  public finishLogout = () => {
    this._user = null;
    this._loginChangedSubject.next(false);
    return this._userManager.signoutRedirectCallback();
  }

  public getAccessToken = async (): Promise<string|null> => {
    const user = await this._userManager.getUser();
      return !!user && !user.expired ? user.access_token : null;
  }

  private checkUser = (user : User|null): boolean => {
    return !!user && !user.expired;
  }
}
