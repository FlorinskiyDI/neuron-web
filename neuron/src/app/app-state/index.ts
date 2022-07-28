import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { NODE_SESSION, sessionReducer } from './session/session.state';
import { ISessionStateModel } from './session/session.model'
import { SessionActions } from './session/session.actions'
  
export interface State {
    [NODE_SESSION]: ISessionStateModel;
}

export const reducers: ActionReducerMap<State, any> = {
    [NODE_SESSION]: sessionReducer
};

function log(
    reducer: ActionReducer<any>
  ): ActionReducer<any> {
    return (state, action) => {
      console.log('STORE STATE', state);
      console.log('STORE ACTION', action);
  
      return reducer(state, action);
    };
  }

export const metaReducers: MetaReducer<State, any>[] = (!environment.production && environment.redux_log) ? [log] : [];