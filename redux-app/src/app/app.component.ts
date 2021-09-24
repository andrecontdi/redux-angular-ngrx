import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as action from './counter/counter.actions';
import { initialState } from './counter/counter.reducer';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public counter = initialState;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((counter: number) => {
      console.log(
        '🚀 ~ file: app.component.ts ~ line 23 ~ AppComponent ~ this.store.select ~ counter',
        counter
      );

      this.counter = counter;
    });
  }

  public increment() {
    this.store.dispatch(action.increment());
  }

  public decrement() {
    this.store.dispatch(action.decrement());
  }
}
