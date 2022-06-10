import { Routes } from '@angular/router';
import { AuthGuardService } from './app-core/auth/auth.guard'
import { SigninRedirectCallbackComponent } from './layout-auth/signin-redirect-callback/signin-redirect-callback.component'
import { SignoutRedirectCallbackComponent } from './layout-auth/signout-redirect-callback/signout-redirect-callback.component'

export const AppRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadComponent: () => import('./layout-auth/login/login.component').then(m => m.LoginComponent)
  },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
  {
    path: 'main',
    loadComponent: () => import('./layout-main/layout-main.component').then(m => m.LayoutMainComponent)
  },
];