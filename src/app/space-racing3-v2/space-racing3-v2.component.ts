import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-space-racing3-v2',
  templateUrl: './space-racing3-v2.component.html',
  styleUrls: ['./space-racing3-v2.component.css']
})
export class SpaceRacing3V2Component implements AfterViewInit {
	@ViewChild('canvas') public canvas: ElementRef;
	subscription: any;
	showLoader = true;
	constructor(
		public router: Router,
	) { }

	public ngAfterViewInit() {
		let explode = false;
		let nav = this.router
		let canvas: any = document.getElementById('racing');
		let ctx = canvas.getContext("2d");

		let background = new Image();
		background.src = "assets/images/backRacing3.png";
		let bX = 0;
		let bY = 0;

		let asteroidMaker = new Image();
		asteroidMaker.src = "assets/images/asteroidKiller.png"

		let canvasWidth = 2000;
		let canvasHeight = 1000;
		// Sprite du vaisseau
		let spriteWidth = 1800;
		let spriteHeight = 700;
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

		let ennemy1 = new Image();
		ennemy1.src = "assets/images/enemy_5.png"

		// Sprite de ennemis
		let ennemy1Width = 5100;
		let ennemy1Height = 230;
		let e1Rows = 1;
		let e1Cols = 16;
		let e1Width = ennemy1Width / e1Cols;
		let e1Height = ennemy1Height / e1Rows;
		let e1CurFrame = 0;
		let e1FrameCount = 12;
		let e1X = 0;
		let e1Y = 0;
		let e1SrcX = 0;
		let e1SrcY = 0;

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
		randomEnnemy(7);
		randomAsteroids(10);
		randomEnnemy1(5);


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

		function randomEnnemy1(max) {
			if (stopRandom) return;
			if (max < 0) return;
			else {
				setInterval(function () {
					e1Y += 10
				}, 50);
				setTimeout(function () {
					e1Y = 0;
					e1X = Math.floor(Math.random() * (0 - 1800) + 1500);
					max -= 1;
					randomEnnemy(max);
				}, 4000);
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
			exit = setTimeout(function () { nav.navigateByUrl('exit-planet3') }, 25000);
		}

		function loose() {
			clearTimeout(exit);
		}

		win()

		if(!explode){
			setInterval(detectCrash, 50);
		}

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
			if (Math.abs(mBottom) < Math.abs(e1Y) && Math.abs(mTop) > Math.abs((e1Y + e1Height - H)) &&
			((Math.abs(mLeft) < Math.abs(e1X + 50)) && (Math.abs(mRight) > Math.abs(e1X + 50))) &&
			((Math.abs(x + 200) > Math.abs(e1X)) && (Math.abs(x) < Math.abs(e1X)))) {
			audio.play();
			explosion();
			stopRandom = true;
		}
		}


		function draw() {
			updateFrame();
			ctx.drawImage(background, bX, bY);
			ctx.drawImage(asteroidMaker, srcX, srcY, width, height, x, y, 280, 320);
			ctx.drawImage(ennemy, eSrcX, eSrcY, eWidth, eHeight, eX, eY, 200, 200);
			ctx.drawImage(ennemy1, e1SrcX, e1SrcY, e1Width, e1Height, e1X, e1Y, 200, 200);
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
				x += 8;
				vueInit = true;
			}
			setTimeout(gameLoop, 10);
			if ((keyState[37] || keyState[65]) && (x > 0) && (!explode)) {
				x -= 8;
				gauche();
				vueInit = true;
			}
			if ((keyState[38] || keyState[87]) && (y > 0) && (!explode)) {
				haut();
				y -= 3;
				vueInit = true;
			}
			if ((keyState[40] || keyState[83]) && (y < 850) && (!explode)) {
				bas();
				y += 3;
				vueInit = true;
			}
		}
		gameLoop();


		//Animations


		function droit() {
			let spriteWidth = 1800;
			let spriteHeight = 700;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			frameCount = 3;
			srcX = 0;
			srcY = 1650;
		}

		function gauche() {
			let spriteWidth = 1800;
			let spriteHeight = 700;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			frameCount = 3;
			srcX = 0;
			srcY = 1650;
		}


		function bas() {
			let spriteWidth = 1800;
			let spriteHeight = 700;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			frameCount = 3;
			srcX = 0;
			srcY = 1650;
		}

		function haut() {
			let spriteWidth = 1800;
			let spriteHeight = 700;
			rows = 1;
			cols = 3;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			frameCount = 3;
			srcX = 0;
			srcY = 1650;
		}

		function init() {
			let spriteWidth = 1800;
			let spriteHeight = 700;
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
			spriteWidth = 4680;
			spriteHeight = 420;
			rows = 1;
			cols = 12;
			width = spriteWidth / cols;
			height = spriteHeight / rows;
			curFrame = 0;
			frameCount = 12;
			srcX = 0;
			srcY = 2800;
			explode = true;
			loose();
			setTimeout(function () { nav.navigateByUrl('game-over') }, 2000)
		}
	}
}