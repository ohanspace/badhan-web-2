import { PLATFORM_DIRECTIVES } from '@angular/core'; //used for globally usefull directives
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { SettingsComponent, ProfileComponent } from './settings';
import { SearchDonorComponent } from './search-donor';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  {
    path: 'search/:bloodGroup/:district',
    component: SearchDonorComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];