import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from '../auth/auth.reducers';
import { uiReducer, UiState } from '../ui/ui.reducer';

export interface AppState {
  ui: UiState;
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  auth: authReducer,
};
