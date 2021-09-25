import { Action, createReducer, on } from '@ngrx/store';

import * as action from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(action.increment, (state) => state + 1),
  on(action.decrement, (state) => state - 1),
  on(action.multiply, (state, { multiplyFactor }) => state * multiplyFactor),
  on(action.divide, (state, { divideFactor }) => state / divideFactor),
  on(action.reset, (state) => initialState)
);

export function counterReducer(
  state: number | undefined,
  action: Action
): number {
  return _counterReducer(state, action);
}
