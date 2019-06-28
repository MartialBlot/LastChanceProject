import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'app-space-racing',
	templateUrl: './space-racing.component.html',
	styleUrls: ['./space-racing.component.css']
})
export class SpaceRacingComponent implements AfterViewInit {

	@ViewChild('canvas') public canvas: ElementRef;
	subscription: any;
	constructor
	(
		public router: Router,
	) { }

	public ngAfterViewInit() {

		let nav = this.router
		let canvas: any = document.getElementById('racing');
		let ctx = canvas.getContext("2d");
		let explode = false;

		let background = new Image();
		background.src = "assets/images/racingBackgound.png";
		let bX = 0;
		let bY = 0;

		let widowMaker = new Image();
		widowMaker.src = "assets/images/widowMaker1.png"

		let canvasWidth = 2000;
		let canvasHeight = 1000;
		// Sprite du vaisseau
		let spriteWidth = 2370;
		let spriteHeight = 1030;
		let rows = 1;
		let cols = 3;
		let width = spriteWidth / cols;
		let height = spriteHeight / rows;
		let curFrame = 0;
		let frameCount = 3;
		let x = 800;
		let y = 700;
		let srcX = 0;
		let srcY = 0;
		let vueInit = false;

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
		let eX = 800;
		let eY = 0;
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
		let aY = 0;
		let aSrcX = 0;
		let aSrcY = 0;
		randomEnnemy(6);
		randomAsteroids(9);

		if(!explode){
			setInterval(detectCrash, 50);
		}

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

		function randomEnnemy(max) {
			if (stopRandom) return;
			if (max < 0) return;
			else {
				setInterval(function () {
					eY += 10
				}, 50);
				setTimeout(function () {
					eY = 0;
					eX = Math.floor(Math.random() * (0 - 1800) + 1500);
					max -= 1;
					randomEnnemy(max);
				}, 3000);
			}
		}

		function randomAsteroids(max) {
			if (stopRandom) return;
			if (max < 0) return;
			else {
				setInterval(function () {
					aY += 20
				}, 50);
				setTimeout(function () {
					aY = 0;
					aX = Math.floor(Math.random() * (0 - 1800) + 1500);
					max -= 1;
					randomAsteroids(max);
				}, 2000);
			}
		}

		let exit;
		function win() {
			exit = setTimeout(function () { nav.navigateByUrl('exit-planet') }, 20000);
		}

		function loose() {
			clearTimeout(exit);
		}

		win()

		var audio = new Audio('assets/sounds/SFB-explosion2.mp3');

		let stopRandom = false;

		function detectCrash() {
			const H = canvasHeight;
			const eBottom = eY;
			const eTop = eBottom + eHeight - H;
			const mBottom = y;
			const mTop = mBottom + height - H;
			const eLeft = eX;
			const mLeft = x;
			const mRight = mLeft + width;
			if (Math.abs(mBottom) < Math.abs(eBottom) && Math.abs(mTop) > Math.abs(eTop) &&
				((Math.abs(mLeft) < Math.abs(eX + 50)) && (Math.abs(mRight) > Math.abs(eX + 50))) &&
				((Math.abs(x + 200) > Math.abs(eX)) && (Math.abs(x) < Math.abs(eX)))) {
				audio.play();
				explosion();
				stopRandom = true;
			}
			if (Math.abs(mBottom) < Math.abs(aY) && Math.abs(mTop) > Math.abs((aY + aHeight - H)) &&
				((Math.abs(mLeft) < Math.abs(aX + 50)) && (Math.abs(mRight) > Math.abs(aX + 50))) &&
				((Math.abs(x + 200) > Math.abs(aX)) && (Math.abs(x) < Math.abs(aX)))) {
				audio.play();
				explosion();
				stopRandom = true;
			}
		}


		function draw() {
			updateFrame();
			ctx.drawImage(background, bX, bY);
			ctx.drawImage(widowMaker, srcX, srcY, width, height, x, y, 280, 320);
			ctx.drawImage(ennemy, eSrcX, eSrcY, eWidth, eHeight, eX, eY, 200, 200);
			ctx.drawImage(asteroids, aSrcX, aSrcY, aWidth, aHeight, aX, aY, 80, 70);
		}
		setInterval(draw, 50);
		//contrôles
		let keyState = {};
		document.addEventListener('keydown', function (e) {
			keyState[e.keyCode || e.which] = true;
		}, true);
		document.addEventListener('keyup', function (e) {
			keyState[e.keyCode || e.which] = false;
			if (vueInit) {
				init();
			}
		}, true);

		function gameLoop() {
			if ((keyState[39] || keyState[68]) && (x < 1800) && (!explode)) {
				droit();
				x += 10;
				vueInit = true;
			}
			setTimeout(gameLoop, 10);
			if ((keyState[37] || keyState[65]) && (x > 0) && (!explode)) {
				x -= 10;
				gauche();
				vueInit = true;
			}
			if ((keyState[38] || keyState[87]) && (y > 0) && (!explode)) {
				haut();
				y -= 10;
				vueInit = true;
			}
			if ((keyState[40] || keyState[83]) && (y < 850) && (!explode)) {
				bas();
				y += 10;
				vueInit = true;
			}
		}
		gameLoop();


		let ennemy1 = {
			ennemyWidth: 600,
			ennemyHeight: 260,
			eRows: 1,
			eCols: 3,
			eWidth: ennemyWidth / eCols,
			eHeight: ennemyHeight / eRows,
			eCurFrame: 0,
			eFrameCount: 3,
			eX: 145,
			eY: 280,
			eSrcX: 0,
			eSrcY: 90,
		}

		//Animations

		function droit() {
			spriteWidth = 2400;
			spriteHeight = 1100;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			frameCount = 3;
			srcX = 0;
			srcY = 5300;
		}

		function gauche() {
			spriteWidth = 2400;
			spriteHeight = 1100;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			frameCount = 3;
			srcX = 0;
			srcY = 5300;
		}

		function bas() {
			spriteWidth = 2400;
			spriteHeight = 1100;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			frameCount = 3;
			srcX = 0;
			srcY = 5300;
		}

		function haut() {
			spriteWidth = 2400;
			spriteHeight = 1100;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			frameCount = 3;
			srcX = 0;
			srcY = 5300;
		}

		function init() {
			spriteWidth = 2370;
			spriteHeight = 1030;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			curFrame = 0;
			frameCount = 3;
			srcX = 0;
			srcY = 0;
		}


		function explosion() {
			spriteWidth = 12000;
			spriteHeight = 1000;
			rows = 1;
			cols = 12;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			curFrame = 0;
			frameCount = 12;
			srcX = 0;
			srcY = 6500;
			explode = true;
			loose();
			setTimeout(function () { nav.navigateByUrl('game-over') }, 3000);
		}
	}
}

