import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class GlobalErrorService {

    private _globalErrorSubject$ = new Subject<any[]>();
    public globalError$ = this._globalErrorSubject$.asObservable();
  
    globalErrorPush(data: any) {
      if (!data) { return }
      this._globalErrorSubject$.next(data)  
    }

}