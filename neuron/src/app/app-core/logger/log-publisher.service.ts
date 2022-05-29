import { Injectable } from '@angular/core';
import { LogPublisher, LogPublisherConfig } from './log-publisher';
import { LogConsole, } from './log-publisher-console';
import { LogLocalStorage } from './log-publisher-local-storage';
import { Observable, throwError } from 'rxjs';
import LogPublishersJson from './log-publishers.json';

@Injectable({
    providedIn: 'root'
})

export class LogPublisherService {

    constructor() {
        // build publishers array
        this.buildPublishers();
    }
    publishers: LogPublisher[] = [];

    buildPublishers(): void {
        let logPub: LogPublisher;


        for (const pub of LogPublishersJson.filter((p: LogPublisherConfig) => p.isActive)) {
            switch (pub.loggerName.toLowerCase()) {
                case 'console':
                    logPub = new LogConsole();
                    break;
                case 'localstorage':
                    logPub = new LogLocalStorage();
                    break;
                default:
                    logPub = new LogConsole();
            }

            // Set location of logging
            logPub.location = pub.loggerLocation;

            // Add publisher to array
            this.publishers.push(logPub);
        }
    }

    private handleErrors(error: any): Observable<any> {
        let msg = 'Status: ' + error.status;
        msg += ' - Status Text: ' + error.statusText;

        if (error.json()) {
            msg += ' - Exception Message: '
                + error.json().exceptionMessage;
        }

        const errors: string[] = [];
        errors.push(msg);
        console.error('An error occurred', errors);

        return throwError(errors);
    }
}
