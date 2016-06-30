import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

// core
import { AUTH_PROVIDERS } from './app/core/auth';
import { FIREBASE_APP_PROVIDERS } from './app/core/firebase';
//routes
import { APP_ROUTER_PROVIDERS } from './app/routes';
//app root
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  FIREBASE_APP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
]);

