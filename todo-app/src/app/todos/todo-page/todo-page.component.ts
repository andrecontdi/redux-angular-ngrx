import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.model';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  public toggleAll: FormControl = new FormControl();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.toggleAll = new FormControl(false);

    this.toggleAll.valueChanges.subscribe(() => {
      this.store.dispatch(toggleAll());
    });
  }
}
