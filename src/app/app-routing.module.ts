import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstPlanetComponent } from './first-planet/first-planet.component';
import { SpaceRacingComponent } from './space-racing/space-racing.component';
import { ExitPlanetComponent } from './exit-planet/exit-planet.component';
import { ExitPlanet2Component } from './exit-planet2/exit-planet2.component';
import { GameOverComponent } from './game-over/game-over.component';
import { SpaceRacing2Component } from './space-racing2/space-racing2.component';
import { SpaceRacing3Component } from './space-racing3/space-racing3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planet1', component: FirstPlanetComponent},
  { path: 'racing', component: SpaceRacingComponent },
  { path: 'racing2', component: SpaceRacing2Component },
  { path: 'racing3', component: SpaceRacing3Component },
  { path: 'exit-planet', component: ExitPlanetComponent },
  { path: 'exit-planet2', component: ExitPlanet2Component },
  { path: 'game-over', component: GameOverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
