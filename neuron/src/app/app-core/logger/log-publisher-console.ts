import { LogEntry } from './logger.service';
import { Observable, of } from 'rxjs';
import { LogPublisher } from './log-publisher';

export class LogConsole extends LogPublisher {

    log(entry: LogEntry): Observable<boolean> {
      // Log to console
      console.log(entry.buildLogString());
      return of(true);
    }
  
    clear(): Observable<boolean> {
      console.clear();
      return of(true);
    }
  }