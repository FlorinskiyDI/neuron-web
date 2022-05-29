import { ISessionStateModel } from './session.model'
import { IStateBase } from '../app.model'

export class LoginUser {
    static readonly type = '[Session] login user';
}

export class LoginUserSuccess {
    static readonly type = '[Session] login user success';
    constructor(public payload: ISessionStateModel) {}
}

export class LoginUserFailed {
    static readonly type = '[Session] login user failed';
    constructor(public payload: IStateBase) {}
}

export class LogoutUser {
    static readonly type = '[Session] logout user';
}
