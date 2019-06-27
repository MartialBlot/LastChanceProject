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
	) { }


	public ngAfterViewInit() {
		let canvas: any = document.getElementById('racing');
		let ctx = canvas.getContext("2d");

		let background = new Image();
		background.src = "assets/images/racingBackground2.jpg";
		let bX = 0;
		let bY = 0;

		let widowMaker = new Image();
		widowMaker.src = "assets/images/widowMaker.png"

		let canvasWidth = 1200;
		let canvasHeight = 800;
		// Sprite du vaisseau
		let spriteWidth = 2370;
		let spriteHeight = 1030;
		let rows = 1;
		let cols = 3;
		let width = spriteWidth / cols;
		let height = spriteHeight / rows;
		let curFrame = 0;
		let frameCount = 3;
		let x = 400;
		let y = 320;
		let srcX = 0;
		let srcY = 0;

		let ennemy = new Image();
		ennemy.src = "assets/images/vaisseauennemi.png"

		// Sprite de ennemis
		let ennemyWidth = 600;
		let ennemyHeight = 260;
		let eRows = 1;
		let eCols = 3;
		let eWidth = ennemyWidth / eCols;
		let eHeight = ennemyHeight / eRows;
		let eCurFrame = 0;
		let eFrameCount = 3;
		let eX = 145;
		let eY = 280;
		let eSrcX = 0;
		let eSrcY = 90;

		canvas.width = canvasWidth;
		canvas.height = canvasHeight;

		let asteroids = new Image();
		asteroids.src = "assets/images/asteroids.png"

		// Sprite de metéorite
		let asteroidWidth = 900;
		let asteroidHeight = 370;
		let aRows = 1;
		let aCols = 3;
		let aWidth = asteroidWidth / aCols;
		let aHeight = asteroidHeight / aRows;
		let aCurFrame = 0;
		let aFrameCount = 3;
		let aX = 500;
		let aY = 200;
		let aSrcX = 0;
		let aSrcY = 0;


		function updateFrame() {
			curFrame = ++curFrame % frameCount;
			srcX = curFrame * width;
			ctx.clearRect(x, y, width, height);

			eCurFrame = ++eCurFrame % eFrameCount;
			eSrcX = eCurFrame * eWidth;
			ctx.clearRect(eX, eY, eWidth, eHeight);

			aCurFrame = ++aCurFrame % aFrameCount;
			aSrcX = aCurFrame * aWidth;
			ctx.clearRect(aX, aY, aWidth, aHeight);
		}

		function draw() {
			updateFrame();
			ctx.drawImage(background, bX, bY, 1400, 800, 0, 0, 2000, 2000);
			ctx.drawImage(widowMaker, srcX, srcY, width, height, x, y, 280, 320);
			ctx.drawImage(ennemy, eSrcX, eSrcY, eWidth, eHeight, eX, eY, eWidth, eHeight);
			ctx.drawImage(asteroids, aSrcX, aSrcY, aWidth, aHeight, aX, aY, 50, 40);
		}
		setInterval(draw, 80);
		//contrôles
		let keyState = {};
		document.addEventListener('keydown', function (e) {
			keyState[e.keyCode || e.which] = true;
		}, true);
		document.addEventListener('keyup', function (e) {
			keyState[e.keyCode || e.which] = false;
		}, true);

		function gameLoop() {
			//Control droit
			if (keyState[39] || keyState[68]) {
				droit();
				x += 2;
			}
			setTimeout(gameLoop, 10);
		}
		gameLoop();

		//Animations

		function droit() {
			spriteWidth = 2400;
			spriteHeight = 1100;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			curFrame = 0;
			frameCount = 3;
			srcX = 0;
			srcY = 5300;
		}
	}
}