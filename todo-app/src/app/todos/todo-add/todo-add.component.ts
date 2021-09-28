import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.model';
import { add } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  public textInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  public add(): void {
    if (this.textInput.invalid) {
      return;
    }

    this.store.dispatch(add({ text: this.textInput.value }));
    this.textInput.reset();
  }
}
