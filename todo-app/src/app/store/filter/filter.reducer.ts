import { Action, createReducer, on } from '@ngrx/store';
import { setFilter } from './filter.actions';

export const initialState: string = 'All';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);

export function filterReducer(state: string | undefined, action: Action) {
  return _filterReducer(state, action);
}
