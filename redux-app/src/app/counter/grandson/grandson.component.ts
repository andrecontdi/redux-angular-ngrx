import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as action from '../counter.actions';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styles: [],
})
export class GrandsonComponent implements OnInit {
  public counter: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  public reset(): void {
    this.store.dispatch(action.reset());
  }
}
