import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as action from './counter/counter.action';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public counter: number;

  constructor(private store: Store<AppState>) {
    this.counter = 0;
  }

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter: number) => (this.counter = counter));
  }

  public increment() {
    this.store.dispatch(action.increment());
  }

  public decrement() {
    this.store.dispatch(action.decrement());
  }
}
