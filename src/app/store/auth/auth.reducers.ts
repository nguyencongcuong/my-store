import {createReducer, on} from '@ngrx/store';
import {Auth} from '../../models/auth';
import {login, logout} from './auth.actions';

export const initialState : boolean = false

export const authReducer = createReducer(
  initialState,
  on(login, () => true),
  on(logout, () => false),
)
