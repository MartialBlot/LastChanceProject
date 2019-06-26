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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    ChoiceComponent,
    FirstPlanetComponent,
    SpaceRacingComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
