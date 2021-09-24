import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as action from '../../counter/counter.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styles: [],
})
export class SonComponent implements OnInit {
  public counter: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  public multiply() {
    this.store.dispatch(action.multiply({ multiplyFactor: 2 }));
  }

  public divide() {
    // this.counter = this.counter / 2;
  }
}
