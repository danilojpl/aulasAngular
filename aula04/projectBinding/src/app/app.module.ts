import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './views/binding/binding.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';
import { ExSelectComponent } from './views/ex-select/ex-select.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    Exercicio01Component,
    Exercicio02Component,
    ExSelectComponent
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
