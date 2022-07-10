import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { GlobalErrorService } from './app-core/errors/global-error.service';
import { LoggerService } from './app-core/logger/logger.service';
import { Subject } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {
  AppNotificationsComponent,
  AppNotificationsService,
  AppNotificationsStore,
  IAppNotificationModel
} from './app-common/components/app-notifications'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatToolbarModule,
    RouterModule,
    AppNotificationsComponent
  ],
  providers: [
    AppNotificationsService,
    AppNotificationsStore
  ]
})

export class AppComponent implements OnInit {

  items:any = {notifications: []}
  dataSubject: Subject<any> = new Subject();

  constructor(
    private globalErrorService: GlobalErrorService,
    private loggerService: LoggerService,
    private appNotificationsService: AppNotificationsService
  ) { }

  ngOnInit(): void {
    this.globalErrorService.globalError$.subscribe((error: any) => {
      this.loggerService.error('[global error handler]', error);
      this.dataSubject.next([error]);
    });
  }
}