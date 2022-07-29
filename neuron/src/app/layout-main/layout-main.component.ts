import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app-core/auth/auth.service';
import { AngularSplitModule } from 'angular-split';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss'],
  imports: [
    RouterModule,
    AngularSplitModule
  ]
})

export class LayoutMainComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void { }

  public logout() {
    debugger;
    this._authService.logout();
  }

}