import { Action, createReducer, on } from '@ngrx/store';
import { hideLoader, showLoader } from './ui.actions';

export interface UiState {
  showLoader: boolean;
}

export const initialState: UiState = {
  showLoader: false,
};

const _uiReducer = createReducer(
  initialState,
  on(showLoader, (state) => ({ ...state, showLoader: true })),
  on(hideLoader, (state) => ({ ...state, showLoader: false }))
);

export function uiReducer(state: UiState | undefined, action: Action): UiState {
  return _uiReducer(state, action);
}
