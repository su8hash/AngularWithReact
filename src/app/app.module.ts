import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
