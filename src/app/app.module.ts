import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { pipesAppRoutingModule } from './pages/pipes-app-routing.module';
import { MenuComponent } from './shared/menu/menu.component';

import { registerLocaleData } from '@angular/common';
import LocaleEs from '@angular/common/locales/es-MX';
import LocaleFr from '@angular/common/locales/fr';
registerLocaleData( LocaleEs );
registerLocaleData( LocaleFr );

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
