import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Add missing import statement for 'routes' module

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};