// main
import { enableProdMode, importProvidersFrom, ErrorHandler } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// app
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';
import { environment } from './environments/environment';
import { GlobalErrorHandler } from './app/app-core/errors/global-error.handler';

// ngrx - app state
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './app/app-state';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserModule,
      RouterModule.forRoot(AppRoutes),
      StoreModule.forRoot(
        reducers,
        {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }
      ),      
      StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    ),
    {
      provide: 'LOGS',
      useValue: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    
  ]
})
.catch(err => console.error(err));