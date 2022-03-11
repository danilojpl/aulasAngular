import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { ExNgforComponent } from './views/ex-ngfor/ex-ngfor.component';
import { ExPaisesComponent } from './views/ex-paises/ex-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent,
    Ex02Component,
    ExemploNgforComponent,
    ExNgforComponent,
    ExPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
