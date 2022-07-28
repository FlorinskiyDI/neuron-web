import { SessionActions, SessionActionsType } from './session.actions'
import { ISessionStateModel } from './session.model'
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const NODE_SESSION = 'node-session';


// reducer 

const INITIAL_STATE: ISessionStateModel = {
  access_token: null,
  refresh_token: null,
  user: null,
  error: null,
  errorData: null,
  isProcessing: false
};

export const sessionReducer = (state = INITIAL_STATE, action: SessionActions) => {
  switch (action.type) {
    case SessionActionsType.loginUser:
      return {
        ...state,
        isProcessing: true
      };
    case SessionActionsType.loginUserSuccess:
      return {
        ...state,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        user: action.payload.user,
        error: false,
        errorData: null,
        isProcessing: false
      };
    case SessionActionsType.loginUserFailed:
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        user: null,
        error: true,
        errorData: action.payload.errorData,
        isProcessing: false,
      };
    case SessionActionsType.logoutUser:
      return {
        ...state,
        ...INITIAL_STATE
      };
    default:
      return state;
  }
}


// selectors

export const selectCountFeature = createFeatureSelector<ISessionStateModel>(NODE_SESSION);

export const selectSession = createSelector(
  selectCountFeature,
  (state: ISessionStateModel): ISessionStateModel => state
);

export const selectSessionAccessToken = createSelector(
  selectCountFeature,
  (state: ISessionStateModel): string | null => state?.access_token
);

export const selectSessionRerfreshToken = createSelector(
  selectCountFeature,
  (state: ISessionStateModel): string | null => state?.refresh_token
);
