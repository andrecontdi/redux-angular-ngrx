import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../shared/models/todo.model';
import { add, completed, edit } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Save the world!'),
  new Todo('Beat Thanos'),
  new Todo('Eat a Taco'),
];

const _todosReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo(text)]),
  on(completed, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, newText }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: newText,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todosReducer(state: Todo[] | undefined, action: Action) {
  return _todosReducer(state, action);
}
