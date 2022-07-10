import { Injectable, ErrorHandler } from '@angular/core';
import { GlobalErrorService } from './global-error.service';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  
  constructor(private globalErrorService: GlobalErrorService) { }

  handleError(error: object) {
    this.globalErrorService.globalErrorPush(error);    
  }

}

