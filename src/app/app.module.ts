import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ChoiceComponent } from './choice/choice.component';
import { FirstPlanetComponent } from './first-planet/first-planet.component';
import { SpaceRacingComponent } from './space-racing/space-racing.component';
import { ModalComponent } from './modal/modal.component';
import { VideofinalComponent } from './videofinal/videofinal.component';
import { ProgressComponent } from './progress/progress.component';
import {ProgressBarModule} from 'angular-progress-bar';
import { ExitPlanetComponent } from './exit-planet/exit-planet.component';
import { ExitPlanet2Component } from './exit-planet2/exit-planet2.component';
import { ExitPlanet3Component } from './exit-planet3/exit-planet3.component';
import { GameOverComponent } from './game-over/game-over.component';
import { SpaceRacing2Component } from './space-racing2/space-racing2.component';
import { SpaceRacing3Component } from './space-racing3/space-racing3.component';
import { VideotransitComponent } from './videotransit/videotransit.component';
import { HeartComponent } from './heart/heart.component';
import { Videotransit2Component } from './videotransit2/videotransit2.component';
import { Videotransit3Component } from './videotransit3/videotransit3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    ChoiceComponent,
    FirstPlanetComponent,
    SpaceRacingComponent,
    ModalComponent,
    VideofinalComponent,
    ProgressComponent,
    ExitPlanetComponent,
    ExitPlanet2Component,
    ExitPlanet3Component,
    GameOverComponent,
    SpaceRacing2Component,
    SpaceRacing3Component,
    VideotransitComponent,
    HeartComponent,
    Videotransit2Component,
    Videotransit3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
