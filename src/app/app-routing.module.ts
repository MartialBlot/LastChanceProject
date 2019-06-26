import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ChoiceComponent } from './choice/choice.component';
import { FirstPlanetComponent } from './first-planet/first-planet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'play', component: VideoComponent},
  { path: 'choix', component: ChoiceComponent},
  { path: 'planet1', component: FirstPlanetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
