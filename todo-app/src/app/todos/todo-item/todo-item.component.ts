import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.model';
import { Todo } from 'src/app/shared/models/todo.model';

import { completed, remove, update } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() public todo: Todo = {
    id: 0,
    text: '',
    completed: false,
  };
  @ViewChild('editingInput') editingInput: ElementRef | undefined;

  public checkCompleted: FormControl = new FormControl();
  public textInput: FormControl = new FormControl();

  public editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(() => {
      console.log(this.checkCompleted.value);
      this.store.dispatch(completed({ id: this.todo.id }));
    });
  }

  public edit(): void {
    this.editing = !this.editing;
    this.textInput.setValue(this.todo.text);
    setTimeout(() => this.editingInput?.nativeElement.select(), 1);
  }

  public update(): void {
    this.editing = !this.editing;

    if (this.textInput.invalid || this.textInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(
      update({ id: this.todo.id, newText: this.textInput.value })
    );
  }

  public remove() {
    this.store.dispatch(remove({ id: this.todo.id }));
  }
}
