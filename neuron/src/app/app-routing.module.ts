import { Routes } from '@angular/router';
import { LayoutWelcomeComponent } from './layout-welcome/layout-welcome.component'

export const AppRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user/user.component').then(m => m.UserComponent)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./layout-welcome/layout-welcome.component').then(m => m.LayoutWelcomeComponent)
  },
];