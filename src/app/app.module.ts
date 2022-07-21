import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxSimpleCountdownModule} from "ngx-simple-countdown";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SectionFirstComponent } from './components/section-first/section-first.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SectionFirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSimpleCountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
