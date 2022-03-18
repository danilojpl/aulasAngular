import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgswitchComponent } from './views/exemplo-ngswitch/exemplo-ngswitch.component';
import { ExercicioNgswitchComponent } from './views/exercicio-ngswitch/exercicio-ngswitch.component';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgswitchComponent,
    ExercicioNgswitchComponent,
    Exercicio02Component
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
