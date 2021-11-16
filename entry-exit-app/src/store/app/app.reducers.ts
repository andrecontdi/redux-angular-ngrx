import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from '../auth/auth.reducers';
import {
  entryExitReducer,
  EntryExitState,
} from '../entry-exit/entry-exit.reducers';
import { uiReducer, UiState } from '../ui/ui.reducer';

export interface AppState {
  ui: UiState;
  auth: AuthState;
  entryExit: EntryExitState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  auth: authReducer,
  entryExit: entryExitReducer,
};
