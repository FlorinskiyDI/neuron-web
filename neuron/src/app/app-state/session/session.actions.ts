import { Action } from '@ngrx/store';
import { ISessionStateModel } from './session.model'
import { IStateBase } from '../app.model'

export enum SessionActionsType {
    loginUser = '[Session] login user',
    loginUserSuccess = '[Session] login user success',
    loginUserFailed = '[Session] login user failed',
    logoutUser = '[Session] logout user',
}

export class LoginUserAction implements Action {
    readonly type = SessionActionsType.loginUser;
}

export class LoginUserSuccessAction implements Action {
    readonly type = SessionActionsType.loginUserSuccess;
    constructor(public payload: ISessionStateModel) { }
}

export class LoginUserFailedAction implements Action {
    readonly type = SessionActionsType.loginUserFailed;
    constructor(public payload: IStateBase) { }
}

export class LogoutUserAction implements Action {
    readonly type = SessionActionsType.logoutUser;
}

export type SessionActions =
    LoginUserAction |
    LoginUserSuccessAction |
    LoginUserFailedAction |
    LogoutUserAction;