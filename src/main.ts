import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as  React from 'react';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as ReactDOM from 'react-dom';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
