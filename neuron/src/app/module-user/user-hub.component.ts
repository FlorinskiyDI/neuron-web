import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AngularSplitModule } from 'angular-split';

@Component({

  standalone: true,
  selector: 'user-hub',
  templateUrl: './user-hub.component.html',
  styleUrls: ['./user-hub.component.scss'],
  imports: [
    MatCardModule,
    AngularSplitModule
  ]
})

export class UserHubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public test() {
    throw new Error('Something bad happened');
  }
}