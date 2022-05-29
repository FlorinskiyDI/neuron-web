import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  imports: [MatCardModule]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public test() {
    throw new Error('Something bad happened');
  }
}