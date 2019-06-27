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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'play', component: VideoComponent},
  { path: 'choix', component: ChoiceComponent},
  { path: 'planet1', component: FirstPlanetComponent},
  { path: 'choix/racing', component: SpaceRacingComponent },
  { path: 'amelioration', component: ModalComponent },
  { path: 'final', component: VideofinalComponent },
  { path: 'progress', component: ProgressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
