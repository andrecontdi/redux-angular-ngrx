import { Action, createReducer, on } from '@ngrx/store';
import { EntryExit } from 'src/app/shared/models/entry-exit.model';
import { addItem, deleteItem, unsetItems } from './entry-exit.actions';

export interface EntryExitState {
  items: EntryExit[] | null;
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
