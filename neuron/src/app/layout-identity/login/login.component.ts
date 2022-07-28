import { Component, OnInit } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../app-core/auth/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MatRippleModule, MatIconModule]
})

export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void { }

  public login = () => {
    this._authService.login();
  }
}