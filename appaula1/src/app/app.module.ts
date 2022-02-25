import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './views/date/date.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { InterpolationComponent } from './views/interpolation/interpolation.component';
import { Ex01Component } from './views/ex01/ex01.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { EventBindingComponent } from './views/event-binding/event-binding.component';
import { Ex05Component } from './views/ex05/ex05.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    SobreComponent,
    InterpolationComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    EventBindingComponent,
    Ex05Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
