import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ADD IMPORT MODULE
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory/in-memory-data.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultantComponent } from './components/consultant/consultant.component';
import { StartupComponent } from './components/startup/startup.component';
import { StartupAdressPipe } from './pipes/startup-adress.pipe';
import { StartupCoFondateurPipe } from './pipes/startup-co-fondateur.pipe';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NsCardComponent } from './components/ns-card/ns-card.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { Page404Component } from './components/page404/page404.component';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConsultantComponent,
    StartupComponent,
    StartupAdressPipe, StartupCoFondateurPipe, NsCardComponent, NotificationsComponent, Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false } ),
    NgZorroAntdModule,
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
