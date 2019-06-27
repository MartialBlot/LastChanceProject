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
import { VideotransitComponent } from './videotransit/videotransit.component';
import { HeartComponent } from './heart/heart.component';



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
  { path: 'exit-planet', component: ExitPlanetComponent },
  { path: 'exit-planet2', component: ExitPlanet2Component },
  { path: 'arrive', component: VideotransitComponent },
  { path: 'heart', component: HeartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
