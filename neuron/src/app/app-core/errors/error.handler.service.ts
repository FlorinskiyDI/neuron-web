import { Injectable, ErrorHandler } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable()

export class GlobalErrorHandler implements ErrorHandler {

  constructor(private logger: LoggerService) { }

  handleError(error: object) {
    this.logger.error('[ERROR GLOBAL INTERCEPTOR - groupSelect threw]', error);
  }
}

