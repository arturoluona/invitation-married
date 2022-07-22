import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxSimpleCountdownModule} from "ngx-simple-countdown";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionFirstComponent } from './components/section-first/section-first.component';
import { SectionSecondComponent } from './components/section-second/section-second.component';
import { SectionThirdComponent } from './components/section-third/section-third.component';
import { SectionFourthComponent } from './components/section-fourth/section-fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionFirstComponent,
    SectionSecondComponent,
    SectionThirdComponent,
    SectionFourthComponent,
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
