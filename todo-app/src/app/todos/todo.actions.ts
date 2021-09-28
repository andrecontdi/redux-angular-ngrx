import { createAction, props } from '@ngrx/store';

export const add = createAction('[Todo] Add', props<{ text: string }>());
