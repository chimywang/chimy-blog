import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import {MyHttpModule} from './http/http.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MyNoopInterceptor} from "./providers/MyNoopInterceptor";

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    MyHttpModule,
/*
    CoreModule,
*/
    CoreModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyNoopInterceptor,
    multi: true, // 注意multi: true选项。这是必须的，因为它会告诉 Angular 这个 HTTP_INTERCEPTORS 表示的是一个数组，而不是单个的值。
  }],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
