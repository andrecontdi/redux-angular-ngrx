import { Action, createReducer, on, State } from '@ngrx/store';
import { EntryExit } from 'src/app/shared/models/entry-exit.model';
import { AppState } from '../app/app.reducers';
import { addItem, deleteItem, unsetItems } from './entry-exit.actions';

export interface EntryExitState {
  items: EntryExit[] | null;
}

export interface AppStateWithEntryExit extends AppState {
  entryExit: EntryExitState;
}

export const initialState: EntryExitState = {
  items: null,
};

const _entryExitReducer = createReducer(
  initialState,
  on(addItem, (state, { items }) => ({ ...state, items: [...items] })),
  // on(deleteItem, (state, { uid }) => {
  //   return state.items?.filter((item) => item.uid !== uid);
  // }),
  on(unsetItems, (state) => ({ ...state, items: [] }))
);

export function entryExitReducer(
  state: EntryExitState | undefined,
  action: Action
): EntryExitState {
  return _entryExitReducer(state, action);
}
