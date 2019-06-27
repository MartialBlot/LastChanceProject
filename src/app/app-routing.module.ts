import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ChoiceComponent } from './choice/choice.component';
import { FirstPlanetComponent } from './first-planet/first-planet.component';
import { SpaceRacingComponent } from './space-racing/space-racing.component';
import { ModalComponent } from './modal/modal.component';
import { VideofinalComponent } from './videofinal/videofinal.component';
import { ProgressComponent } from './progress/progress.component';
import { ExitPlanetComponent } from './exit-planet/exit-planet.component';
import { ExitPlanet2Component } from './exit-planet2/exit-planet2.component';
import { ExitPlanet3Component } from './exit-planet3/exit-planet3.component';
import { GameOverComponent } from './game-over/game-over.component';
import { SpaceRacing2Component } from './space-racing2/space-racing2.component';
import { SpaceRacing3Component } from './space-racing3/space-racing3.component';
import { SpaceRacingV2Component } from './space-racing-v2/space-racing-v2.component';
import { SpaceRacing2V2Component } from './space-racing2-v2/space-racing2-v2.component';
import { SpaceRacing3V2Component } from './space-racing3-v2/space-racing3-v2.component';
import { VideotransitComponent } from './videotransit/videotransit.component';
import { HeartComponent } from './heart/heart.component';
import { Videotransit2Component } from './videotransit2/videotransit2.component';
import { Videotransit3Component } from './videotransit3/videotransit3.component';



const routes: Routes = [
  { path: 'planet1', component: FirstPlanetComponent },
  { path: '', component: HomeComponent },
  { path: 'play', component: VideoComponent },
  { path: 'choix', component: ChoiceComponent },
  { path: 'choix/racing', component: SpaceRacingComponent },
  { path: 'amelioration', component: ModalComponent },
  { path: 'final', component: VideofinalComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'racing', component: SpaceRacingComponent },
  { path: 'racing2', component: SpaceRacing2Component },
  { path: 'racing3', component: SpaceRacing3Component },
  { path: 'racingV2', component: SpaceRacingV2Component },
  { path: 'racing2V2', component: SpaceRacing2V2Component },
  { path: 'racing3V2', component: SpaceRacing3V2Component },
  { path: 'exit-planet', component: ExitPlanetComponent },
  { path: 'exit-planet2', component: ExitPlanet2Component },
  { path: 'exit-planet3', component: ExitPlanet3Component},
  { path: 'game-over', component: GameOverComponent},
  { path: 'arrive', component: VideotransitComponent },
  { path: 'arrive2', component: Videotransit2Component },
  { path: 'arrive3', component: Videotransit3Component },
  { path: 'heart', component: HeartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
