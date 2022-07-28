import { Component, OnInit, Input, NgZone } from '@angular/core';
import { AppNotificationsStore } from './store/app-notifications.store';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { AppNotificationsService } from './app-notifications.service';
import { IAppNotificationModel } from './app-notifications.model';
import { Observable } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http'


@Component({
  standalone: true,
  selector: 'app-notifications',
  templateUrl: './app-notifications.component.html',
  styleUrls: ['./app-notifications.component.scss'],
  imports: [MatSnackBarModule, SnackbarComponent],
  providers: [AppNotificationsStore, AppNotificationsService]
})

export class AppNotificationsComponent implements OnInit {

  @Input() events: Observable<any> = new Observable();

  private notifications: any[] = [];

  constructor(
    private _zone: NgZone,
    private _appNotificationsStore: AppNotificationsStore,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.events.subscribe((errors: any) => {
      this.storeAddNotifications(errors);
    });

    this._appNotificationsStore
      .currentNotifications$
      .subscribe((data: any) => {
        if (data.length == 0) {
          return;
        }
        this._zone.run(() => {
          this._snackBar.openFromComponent(SnackbarComponent, {
            data: [],
            panelClass: 'Splash',
            // duration: 60000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          })
        });
      });
  }



  storeAddNotifications(items: any[]) {
    this._appNotificationsStore.addNotifications(items);
  }

  storeArchiveNotifications(items: any[]) {
    this._appNotificationsStore.archiveNotifications(items);
  }

  throwErro(){
    throw new Error('Something went wrong');
  }

  openSnackBar() {
    // this._snackBar.open('Cannonball!!', 'Splash', {
    //   horizontalPosition: 'end',
    //   verticalPosition: 'bottom',
    // });

      // this._snackBar.openFromComponent(SnackbarComponent, {
      //   data: [],
      //   panelClass: 'Splash',
      //   // duration: 60000,
      //   horizontalPosition: 'end',
      //   verticalPosition: 'bottom',
      // });
  }
}