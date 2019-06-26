import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NesComponent } from './nes/nes.component';
import { FirstPlanetComponent } from './first-planet/first-planet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NesComponent,
    FirstPlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
