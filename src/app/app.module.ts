import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterOutlet} from "@angular/router";
import { MainLayootComponent } from './layouts/main-layoot.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MainInterceptor} from "./main.interceptor";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [AppComponent, MainLayootComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
