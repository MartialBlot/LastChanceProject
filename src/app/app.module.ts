import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NesComponent } from './nes/nes.component';
import { FirstPlanetComponent } from './first-planet/first-planet.component';
import { SpaceRacingComponent } from './space-racing/space-racing.component';
import { ExitPlanetComponent } from './exit-planet/exit-planet.component';
import { ExitPlanet2Component } from './exit-planet2/exit-planet2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NesComponent,
    FirstPlanetComponent,
    SpaceRacingComponent,
    ExitPlanetComponent,
    ExitPlanet2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
