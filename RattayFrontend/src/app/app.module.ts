import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {logIn} from "ionicons/icons";
import {LoginComponent} from "./login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LogComponent} from "./log/log.component";
import {CreatehookupComponent} from "./create-hookup/createhookup.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, LogComponent, CreatehookupComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
