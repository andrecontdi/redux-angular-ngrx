import { ActionReducerMap } from '@ngrx/store';

import { filterReducer } from '../filter/filter.reducer';
import { AppState } from '../../shared/models/app-state.model';
import { todosReducer } from '../todos/todo.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  filter: filterReducer,
};
