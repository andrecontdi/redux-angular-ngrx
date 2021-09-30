import { createAction, props } from '@ngrx/store';

export const add = createAction('[Todo] Add', props<{ text: string }>());
export const toggle = createAction('[Todo] Toggle', props<{ id: number }>());
export const update = createAction(
  '[Todo] Update',
  props<{ id: number; newText: string }>()
);
export const remove = createAction('[Todo] Remove', props<{ id: number }>());
export const toggleAll = createAction('[Todo] Toggle all');
