import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'user-layout-sidebar',
  templateUrl: './user-layout-sidebar.component.html',
  styleUrls: ['./user-layout-sidebar.component.scss'],
  imports: [
    MatCardModule,
    RouterModule
  ]
})

export class UserLayoutSidebar implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}