import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-exit-planet',
  templateUrl: './exit-planet.component.html',
  styleUrls: ['./exit-planet.component.css']
})
export class ExitPlanetComponent implements AfterViewInit {
  public dialog1 = false;
  public dialog2 = false;
  public dialog3 = false;
  public dialog4 = false;
  public dialog5 = false;
  public dialog6 = false;
  public dialog7 = false;
  public dialog8 = false;
  public dialog9 = false;
  public dialog10 = false;
  public dialog11 = false;
  public end = false;
  public continuer = 'Passer';
  public space = true;
  public planet = false;
  public propulsion = false;

  ngAfterViewInit(): void {
  }

  constructor() { }

  continue() {
    if (!this.end && !this.dialog1 && !this.dialog2
      && !this.dialog3 && !this.dialog4 && !this.dialog5
      && !this.dialog6 && !this.dialog7 && !this.dialog8
      && !this.dialog9 && !this.dialog10 && !this.planet
      && !this.propulsion) {
      this.dialog1 = true;
    } else if (this.dialog1) {
      this.dialog1 = false;
      this.dialog2 = true;
    } else if (this.dialog2) {
      this.dialog2 = false;
      this.dialog3 = true;
    } else if (this.dialog3) {
      this.dialog3 = false;
      this.dialog4 = true;
    } else if (this.dialog4) {
      this.dialog4 = false;
      this.dialog5 = true;
    } else if (this.dialog5) {
      this.dialog5 = false;
      this.dialog6 = true;
    } else if (this.dialog6) {
      this.dialog6 = false;
      this.dialog7 = true;
    } else if (this.dialog7) {
      this.dialog7 = false;
      this.dialog8 = true;
    } else if (this.dialog8) {
      this.dialog8 = false;
      this.space = false;
      this.propulsion = true;
    } else if (this.propulsion) {
      this.propulsion = false;
      this.planet = true;
    } else if (this.planet && !this.end && !this.dialog9
      && !this.dialog10 && !this.dialog11) {
      this.dialog9 = true;
    } else if (this.dialog9) {
      this.dialog9 = false;
      this.dialog10 = true;
    } else if (this.dialog10) {
      this.dialog10 = false;
      this.dialog11 = true;
    } else if (this.dialog11) {
      this.dialog11 = false;
      this.end = true;
      this.continuer = 'Continuer';
    }
  }

}
