import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public counter: number;

  constructor() {
    this.counter = 10;
  }

  public increment() {
    this.counter++;
  }

  public decrement() {
    this.counter--;
  }
}
