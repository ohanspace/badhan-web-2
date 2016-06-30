import { PLATFORM_DIRECTIVES } from '@angular/core'; //used for globally usefull directives
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { SettingsComponent, ProfileComponent } from './settings';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];