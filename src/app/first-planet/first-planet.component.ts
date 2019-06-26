import { Component, AfterViewInit } from '@angular/core';
import { by } from 'protractor';

@Component({
  selector: 'app-first-planet',
  templateUrl: './first-planet.component.html',
  styleUrls: ['./first-planet.component.css']
})
export class FirstPlanetComponent implements AfterViewInit {

  constructor() { }

  public ngAfterViewInit() {
    let canvas : any= document.getElementById('map');
    let ctx = canvas.getContext("2d");

    let background = new Image();
    background.src = "assets/images/maptest.png";
    let bX = 300;
    let bY = 300;

    let widowMaker = new Image();
    widowMaker.src = "assets/images/widowMaker.png"

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

    let player = new Image();
    player.src = "assets/images/player.png"

// Sprite de l'heroine
    let playerWidth = 100;
    let playerHeight = 100;
    let pRows = 1;
    let pCols = 1;
    let pWidth = playerWidth/pCols;
    let pHeight = playerHeight/pRows;
    let pCurFrame = 0;
    let pFrameCount = 1;
    let pX=550;
    let pY=320;
    let pSrcX= 0;
    let pSrcY= 800;

    canvas.width =  canvasWidth;
    canvas.height = canvasHeight;


    //contrôles
    let keyState = {};
    document.addEventListener('keydown',function(e){
        keyState[e.keyCode || e.which] = true;
    },true);
    document.addEventListener('keyup',function(e){
        keyState[e.keyCode || e.which] = false;
        initBas()
    },true);

    function gameLoop() {
      //Control droit
      if (keyState[39] || keyState[68]){
          droit();
      }
      setTimeout(gameLoop, 10);
    }
    gameLoop();

    //Animations
    function initBas(){
    playerWidth = 100;
    playerHeight = 100;
    pRows = 1;
    pCols = 1;
    pWidth = playerWidth/pCols;
    pHeight = playerHeight/pRows;
    pCurFrame = 0;
    pFrameCount = 1;
    pX=550;
    pY=320;
    pSrcX= 0;
    pSrcY= 800;
    }

    function droit(){
    playerWidth = 800;
    playerHeight = 100;
    pRows = 1;
    pCols = 8;
    pWidth = playerWidth/pCols;
    pHeight = playerHeight/pRows;
    pCurFrame = 0;
    pFrameCount = 8;
    pSrcX= 0;
    pSrcY= 200;
    }

    //Rafraichissement
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
      ctx.drawImage(player,pSrcX,pSrcY,pWidth,pHeight,pX,pY,pWidth,pHeight);
    }
    setInterval(draw,80);
  }
}
