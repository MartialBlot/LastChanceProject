import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(private location: Location) { }

  public vid = document.getElementById('dramatic');

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
  }

}
