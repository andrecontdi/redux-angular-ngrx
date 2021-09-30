import { createAction, props } from '@ngrx/store';

export const add = createAction('[Todo] Add', props<{ text: string }>());
export const completed = createAction(
  '[Todo] Completed',
  props<{ id: number }>()
);
export const edit = createAction(
  '[Todo] Edit',
  props<{ id: number; newText: string }>()
);
