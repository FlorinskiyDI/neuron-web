
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { LoginUser, LoginUserSuccess, LoginUserFailed, LogoutUser } from './session.actions';
import { ISessionStateModel } from './session.model';

const STATETOKEN_SESSION = new StateToken<ISessionStateModel>(
  'session'
);

const INITIAL_STATE: ISessionStateModel = {
    access_token: null,
    refresh_token: null,
    user: null,
    error: null,
    errorData: null,
    isProcessing: false
  };

@State<ISessionStateModel>({
  name: STATETOKEN_SESSION,
  defaults: INITIAL_STATE,
})

@Injectable()
export class SessionState {

    @Action(LoginUser)
    loginUser(ctx: StateContext<ISessionStateModel>) {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          isProcessing: true
        });
    }

    @Action(LoginUserSuccess)
    loginUserSuccess(ctx: StateContext<ISessionStateModel>, action: LoginUserSuccess) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            access_token: action.payload.access_token,
            refresh_token: action.payload.refresh_token,
            user: action.payload.user,
            error: false,
            errorData: null,
            isProcessing: false
        });
    }

    @Action(LoginUserFailed)
    loginUserFailed(ctx: StateContext<ISessionStateModel>, action: LoginUserFailed) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            access_token: null,
            refresh_token: null,
            user: null,
            error: true,
            errorData: action.payload.errorData,
            isProcessing: false,
        });
    }

    @Action(LogoutUser)
    LogoutUser(ctx: StateContext<ISessionStateModel>) {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          ...INITIAL_STATE
        });
    }

    @Selector()
    static session(state: ISessionStateModel) {
        return state;
    }
}
