import { Component, OnInit } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'layout-welcome',
  templateUrl: './layout-welcome.component.html',
  styleUrls: ['./layout-welcome.component.scss'],
  imports: [MatRippleModule, MatIconModule]
})
export class LayoutWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}