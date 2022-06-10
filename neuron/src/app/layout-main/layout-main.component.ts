import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app-core/auth/auth.service';

@Component({
  standalone: true,
  selector: 'layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})

export class LayoutMainComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void { }

  public logout() {
    debugger;
    this._authService.logout();
  }

}