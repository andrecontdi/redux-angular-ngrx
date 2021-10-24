import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export const setUser = createAction('[Auth] Set user', props<{ user: User }>());
export const unsetUser = createAction('[Auth] Unset user');
