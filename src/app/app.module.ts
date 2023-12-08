import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxSimpleCountdownModule} from "ngx-simple-countdown";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionFirstComponent } from './components/section-first/section-first.component';
import { SectionSecondComponent } from './components/section-second/section-second.component';
import { SectionThirdComponent } from './components/section-third/section-third.component';
import { SectionFourthComponent } from './components/section-fourth/section-fourth.component';
import { SectionFifthComponent } from './components/section-fifth/section-fifth.component';
import { SectionSixthComponent } from './components/section-sixth/section-sixth.component';
import { SectionSeventhComponent } from './components/section-seventh/section-seventh.component';
import { SectionEighthComponent } from './components/section-eighth/section-eighth.component';
import { SectionNinethComponent } from './components/section-nineth/section-nineth.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionFirstComponent,
    SectionSecondComponent,
    SectionThirdComponent,
    SectionFourthComponent,
    SectionFifthComponent,
    SectionSixthComponent,
    SectionSeventhComponent,
    SectionEighthComponent,
    SectionNinethComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSimpleCountdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
