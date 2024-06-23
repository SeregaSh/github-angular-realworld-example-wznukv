import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  SharedModule
} from './shared';
import { AppRoutingModule } from './core/routings/app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './core/interceptors/http.token.interceptor';

import { UserService, JwtService } from './core/services';
import { HeaderComponent, FooterComponent } from './core/components'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    UserService,
    JwtService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
