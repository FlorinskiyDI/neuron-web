import { enableProdMode, importProvidersFrom, ErrorHandler } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GlobalErrorHandler } from './app/app-core/errors/error.handler.service';

// app
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';
import { environment } from './environments/environment';

// ngxs/state
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState } from './app/app-state/app.state';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(AppRoutes),
      NgxsModule.forRoot([...AppState], { developmentMode: !environment.production }),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsLoggerPluginModule.forRoot({ disabled: environment.production })),
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