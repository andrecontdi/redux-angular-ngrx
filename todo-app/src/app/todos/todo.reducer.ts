import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../shared/models/todo.model';
import { add } from './todo.actions';

export const initialState: Todo[] = [new Todo('Save the world!')];

const _todosReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo(text)])
);

export function todosReducer(state: Todo[] | undefined, action: Action) {
  return _todosReducer(state, action);
}
