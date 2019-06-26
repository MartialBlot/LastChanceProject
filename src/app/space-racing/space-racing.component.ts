import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { GameService } from '../services/game.service';


@Component({
	selector: 'app-space-racing',
	templateUrl: './space-racing.component.html',
	styleUrls: ['./space-racing.component.css']
})
export class SpaceRacingComponent implements AfterViewInit {

	@ViewChild('canvas') public canvas: ElementRef;
	subscription: any;
	showLoader = true;

	constructor(
		private appService: AppService,
		private gameService: GameService
	) {}


	public ngAfterViewInit() {
		let canvas : any= document.getElementById('racing');
		let ctx = canvas.getContext("2d");
  
		let background = new Image();
		background.src = "assets/images/racingBackground2.jpg";
		let bX = 300;
		let bY = 300;
  
		let widowMaker = new Image();
		widowMaker.src = "assets/images/widowMaker1.png"
  
		let canvasWidth = 1200;
		let canvasHeight = 800;
  // Sprite du vaisseau
		let spriteWidth = 2370;
		let spriteHeight = 1030;
		let rows = 1;
		let cols = 3;
		let width = spriteWidth/cols;
		let height = spriteHeight/rows;
		let curFrame = 0;
		let frameCount = 3;
		let x=400;
		let y=320;
		let srcX= 0;
		let srcY= 0;
  
		let ennemy = new Image();
		ennemy.src = "assets/images/vaisseauennemi.png"
  
  // Sprite de ennemis
		let ennemyWidth = 2370;
		let ennemyHeight = 1030;
		let pRows = 1;
		let pCols = 8;
		let pWidth = ennemyWidth/pCols;
		let pHeight = ennemyHeight/pRows;
		let pCurFrame = 0;
		let pFrameCount = 8;
		let pX=145;
		let pY=280;
		let pSrcX= 0;
		let pSrcY= 90;
  
		canvas.width =  canvasWidth;
		canvas.height = canvasHeight;
  
		function updateFrame(){
		  curFrame = ++curFrame % frameCount;
		  srcX = curFrame * width;
		  ctx.clearRect(x,y,width,height);
  
		  pCurFrame = ++pCurFrame % pFrameCount;
			 pSrcX = pCurFrame * pWidth;
			 ctx.clearRect(pX,pY,pWidth,pHeight);
		}
  
		function draw(){
		  updateFrame();
		  ctx.drawImage(background,bX,bY,1400,bY,0,-100,1200,900);
		  ctx.drawImage(widowMaker,srcX,srcY,width,height,x,y,280,320);
		  ctx.drawImage(ennemy,pSrcX,pSrcY,pWidth,pHeight,pX,pY,pWidth,pHeight);
		}
		setInterval(draw,80);
	 }
}