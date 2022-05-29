import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user/user.component').then(m => m.UserComponent)
  }
];