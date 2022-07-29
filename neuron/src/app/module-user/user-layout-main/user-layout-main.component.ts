import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'user-layout-main',
  templateUrl: './user-layout-main.component.html',
  styleUrls: ['./user-layout-main.component.scss'],
  imports: [
    MatCardModule,
    RouterModule
  ]
})

export class UserLayoutMain implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}