import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-exit-planet',
  templateUrl: './exit-planet.component.html',
  styleUrls: ['./exit-planet.component.css']
})
export class ExitPlanetComponent implements AfterViewInit {
  public dialog1: boolean = false;
  public dialog2: boolean = false;
  public dialog3: boolean = false;
  public dialog4: boolean = false;
  public dialog5: boolean = false;
  public dialog6: boolean = false;
  public dialog7: boolean = false;
  public dialog8: boolean = false;
  public end: boolean = false;
  public continuer: string = "Passer";

  ngAfterViewInit(): void {
  }

  constructor() { }

  continue() {
    if (!this.end && !this.dialog1 && !this.dialog2 && !this.dialog3 && !this.dialog4 && !this.dialog5 && !this.dialog6 && !this.dialog7 && !this.dialog8) {
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
      this.continuer = "Continuer";
    }
  };


}
