import { createAction, props } from '@ngrx/store';
import { EntryExit } from 'src/app/shared/models/entry-exit.model';

export const addItem = createAction(
  '[Entry exit] Add item',
  props<{ items: EntryExit[] }>()
);
export const deleteItem = createAction(
  '[Entry exit] Delete item',
  props<{ uid: string }>()
);
export const unsetItems = createAction('[Entry exit] Unset items');
