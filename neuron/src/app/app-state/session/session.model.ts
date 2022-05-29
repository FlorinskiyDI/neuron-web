import { IStateBase } from '../app.model'

export interface ISessionStateModel extends IStateBase {
    access_token: string | null;
    refresh_token: string | null;
    user: IUserStateModel | null;
}

export interface IUserStateModel {
    id: number;
    name: string;
    email: string;
}
  