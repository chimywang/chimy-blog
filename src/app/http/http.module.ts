import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import {MyHttpComponent} from './http.component';

@NgModule({
  imports: [ BrowserModule, HttpClientModule ],
  declarations: [MyHttpComponent]
})
export class MyHttpModule { }
