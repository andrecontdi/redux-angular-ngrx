import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFilter } from 'src/app/store/filter/filter.actions';
import { AppState } from 'src/app/shared/models/app-state.model';

import { clearCompleted } from '../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  public actualFilter = 'All';
  public filters = ['All', 'Completed', 'Pending'];
  public itemsLeft = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ todos, filter }) => {
      this.actualFilter = filter;
      this.itemsLeft = todos.filter((todo) => !todo.completed).length;
    });
  }

  public setFilter(filter: string): void {
    this.store.dispatch(setFilter({ filter }));
  }

  public clearCompleted(): void {
    this.store.dispatch(clearCompleted());
  }
}
