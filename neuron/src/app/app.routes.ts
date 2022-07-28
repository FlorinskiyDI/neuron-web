import { Routes } from '@angular/router';
import { AuthGuardService } from './app-core/auth/auth.guard'
import { SigninRedirectCallbackComponent } from './layout-identity/signin-redirect-callback/signin-redirect-callback.component'
import { SignoutRedirectCallbackComponent } from './layout-identity/signout-redirect-callback/signout-redirect-callback.component'
import { LayoutIdentityComponent } from './layout-identity/layout-identity.component';

export const AppRoutes: Routes = [
  {
    path: 'identity',
    component: LayoutIdentityComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./layout-identity/login/login.component').then(m => m.LoginComponent)
      },
      { path: 'signin-callback', component: SigninRedirectCallbackComponent },
      { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
    ]
  },
  {
    path: '',
    loadComponent: () => import('./layout-main/layout-main.component').then(m => m.LayoutMainComponent),
    canActivate: [AuthGuardService]
  },
];