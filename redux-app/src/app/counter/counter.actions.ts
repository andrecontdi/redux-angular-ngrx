import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const multiply = createAction(
  '[Counter] Multiply',
  props<{ multiplyFactor: number }>()
);
export const reset = createAction('[Counter] Reset');
