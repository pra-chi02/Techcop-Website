import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withPreloading, PreloadAllModules } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(),
  ],
};
