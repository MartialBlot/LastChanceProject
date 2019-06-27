import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-exit-planet2',
  templateUrl: './exit-planet2.component.html',
  styleUrls: ['./exit-planet2.component.css']
})
export class ExitPlanet2Component implements AfterViewInit {
  public dialog1 = false;
  public dialog2 = false;
  public dialog3 = false;
  public dialog4 = false;
  public dialog5 = false;
  public dialog6 = false;
  public dialog7 = false;
  public dialog8 = false;
  public end = false;
  public continuer = 'Passer';
  public space = true;

  ngAfterViewInit(): void {
  }

  constructor() { }

  continue() {
    if (!this.end && !this.dialog1 && !this.dialog2
      && !this.dialog3 && !this.dialog4 && !this.dialog5
      && !this.dialog6 && !this.dialog7 && !this.dialog8) {
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
      this.end = true;
      this.continuer = 'Continuer';
      this.space = false;

    }
  }

}
