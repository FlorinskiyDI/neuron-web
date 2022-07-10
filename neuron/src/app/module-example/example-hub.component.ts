import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'example-hub',
  templateUrl: './example-hub.component.html',
  styleUrls: ['./example-hub.component.scss'],
  imports: [MatCardModule]
})

export class ModuleUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public test() {
    throw new Error('Something bad happened');
  }
}