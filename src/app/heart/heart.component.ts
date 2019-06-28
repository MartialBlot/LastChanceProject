import { Component, OnInit } from '@angular/core';
import { GameplayService } from '../gameplay.service';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {

  heart1 = false;
  heart2 = false;
  heart3 = false;

  constructor(private service: GameplayService) {}

  ngOnInit() {
    this.service.heart1.subscribe(res => this.heart1 = res);
    this.service.heart2.subscribe(res => this.heart2 = res);
    this.service.heart3.subscribe(res => this.heart3 = res);
    console.log(this.service)
  }

}
