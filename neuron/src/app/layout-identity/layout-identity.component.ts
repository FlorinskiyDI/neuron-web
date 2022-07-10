import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'layout-identity',
  templateUrl: './layout-identity.component.html',
  imports: [
    RouterModule
  ],
})

export class LayoutIdentityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  public logout() {
  }

}