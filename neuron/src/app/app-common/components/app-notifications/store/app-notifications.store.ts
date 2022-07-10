import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { IAppNotificationModel } from '../app-notifications.model';

const defaultState: IAppNotificationsStateModel = {
  current: [],
  archive: []
};

export interface IAppNotificationsStateModel {
  current: IAppNotificationModel[];
  archive: IAppNotificationModel[];
}

@Injectable()
export class AppNotificationsStore extends ComponentStore<IAppNotificationsStateModel> {

  constructor() {
    super(defaultState);
  }

  // selects

  readonly currentNotifications$ = this.select(state => state.current);
  readonly archiveNotifications$ = this.select(state => state.archive);
  readonly notifications$ = this.select(state => state);


  // updates

  readonly addNotifications = this.updater((
    state: IAppNotificationsStateModel,
    notifications: IAppNotificationModel[] | null) => ({
        ...state,
        current: notifications || []
      }
    ));

  // readonly addNotifications = this.updater((
  //   state: IAppNotificationsStateModel,
  //   notifications: IAppNotificationModel[] | null) => ({
  //       current: state.current
  //     } as IAppNotificationsStateModel
  //   ));

  readonly archiveNotifications = this.updater((
    state: IAppNotificationsStateModel,
    notifications: IAppNotificationModel[]) => {
      // update preview list
      let newCurrent = state.current;
      notifications.forEach(element => {
        newCurrent.filter(item => item.id !== element.id)
      });

      // update archive list
      let archive = state.archive.concat(notifications);
      let newDistinctArray = archive.filter((n, i) => archive.indexOf(n) === i);

      return {
        ...state,
        current: newCurrent,
        archive: newDistinctArray
      }});
}