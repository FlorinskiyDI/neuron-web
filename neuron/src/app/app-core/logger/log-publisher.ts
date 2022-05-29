import { LogEntry } from './logger.service';
import { Observable, of } from 'rxjs';

export abstract class LogPublisher {
  location!: string;
  
  abstract log(record: LogEntry): Observable<boolean>;
  abstract clear(): Observable<boolean>;
}

export class LogPublisherConfig {
  loggerName!: string;
  loggerLocation!: string;
  isActive!: boolean;
}

