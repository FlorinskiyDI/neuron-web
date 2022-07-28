import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AppNotificationsStore  } from './store/app-notifications.store'
import { IAppNotificationModel  } from './app-notifications.model'
import { queueScheduler } from 'rxjs';
import { observeOn } from "rxjs/operators";


@Injectable()
export class AppNotificationsService {
    
  private _appNotification$ = new Subject<IAppNotificationModel[]>();
  public appNotification$ = this._appNotification$.asObservable();

  public constructor(private appNotificationsStore: AppNotificationsStore) {
    this.appNotification$
      // .pipe(observeOn(queueScheduler))
      .subscribe((data: IAppNotificationModel[]) => {
        debugger;
        let pass_data = [
          { title: 'title 1', body: 'description 1'},
          { title: 'title 2', body: 'description 2'}
        ] as IAppNotificationModel[];
        this.appNotificationsStore.addNotifications(pass_data);
      });
  }

  public appNotificationPush(data: IAppNotificationModel[]) {
    this._appNotification$.next(data);
  }

}