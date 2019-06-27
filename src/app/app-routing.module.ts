import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstPlanetComponent } from './first-planet/first-planet.component';
import { SpaceRacingComponent } from './space-racing/space-racing.component';
import { ExitPlanetComponent } from './exit-planet/exit-planet.component';
import { ExitPlanet2Component } from './exit-planet2/exit-planet2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planet1', component: FirstPlanetComponent},
  { path: 'racing', component: SpaceRacingComponent },
  { path: 'exit-planet', component: ExitPlanetComponent },
  { path: 'exit-planet2', component: ExitPlanet2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
