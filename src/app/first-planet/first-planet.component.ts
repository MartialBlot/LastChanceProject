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
    let bX = -1720;
    let bY = -1000;

    let arbre = new Image();
    arbre.src = "assets/images/tree1.png";
    let arbreWidth = 700;
    let arbreHeight = 750;
    let aRows = 1;
    let aCols = 1;
    let aWidth = arbreWidth/aCols;
    let aHeight = arbreHeight/aRows;
    let aCurFrame = 0;
    let aFrameCount = 1;
    let aX=260;
    let aY=320;
    let aSrcX= 110;
    let aSrcY= 0;

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
    let x=40;
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
    let pX=750;
    let pY=320;
    let pSrcX= 0;
    let pSrcY= 800;
    let vueInitHaut = false;
    let vueInitBas = false;
    let vueInitDroite = false;
    let vueInitGauche = false;

    let speed = 3;

    canvas.width =  canvasWidth;
    canvas.height = canvasHeight;

    //Rafraichissement
    function updateFrame(){
      curFrame = ++curFrame % frameCount;
      srcX = curFrame * width;
      ctx.clearRect(x,y,width,height);

      pCurFrame = ++pCurFrame % pFrameCount;
        pSrcX = pCurFrame * pWidth;
        ctx.clearRect(pX,pY,pWidth,pHeight);
    }

    //contrôles
    let keyState = {};
    document.addEventListener('keydown',function(e){
        keyState[e.keyCode || e.which] = true;
    },true);
    document.addEventListener('keyup',function(e){
        keyState[e.keyCode || e.which] = false;
        if(vueInitGauche){
        initGauche();
      } else if (vueInitDroite){
        initDroite();
      } else if (vueInitHaut){
        initHaut();
      } else if (vueInitBas){
        initBas();
      }
    },true);

    //ShowFPS
    let baseFps: any = new Date();
    let valueFPS;
    let showFPS = false;

    function gameLoop() {
      //Calcul fps
      let fpsDiff: any = new Date();
      let fps = 1000 / (fpsDiff - baseFps);
      baseFps = fpsDiff;
      valueFPS = fps;

      //Control droit
      if ((keyState[39] || keyState[68]) && (bX > -4190)){
          bX-=speed;
          x-=speed;
          aX-=speed;
          droit();
          vueInitHaut = false;
          vueInitBas = false;
          vueInitDroite = true;
          vueInitGauche = false;
      }
      //Control gauche
      if ((keyState[37] || keyState[65]) && (bX < -1170)){
        bX+=speed;
        x+=speed;
        aX+=speed;
        gauche();
        vueInitHaut = false;
        vueInitBas = false;
        vueInitDroite = false;
        vueInitGauche = true;
        console.log(bX)

      }
      //Control haut
      if ((keyState[38] || keyState[87]) && (bY < -600)){
        haut();
        y+=speed;
        bY+=speed;
        aY+=speed;
        vueInitHaut = true;
        vueInitBas = false;
        vueInitDroite = false;
        vueInitGauche = false;
      }
      //Control bas
      if ((keyState[40] || keyState[83]) && (bY > -2612)){
        bas();
        bY-=speed;
        y-=speed;
        aY-=speed;
        vueInitHaut = false;
        vueInitBas = true;
        vueInitDroite = false;
        vueInitGauche = false;
      }
      //diagoDroit
      if ((keyState[38] || keyState[87]) && (keyState[39] || keyState[68])){
        diagoDroit();
      }
      //diagoGauche
      if ((keyState[38] || keyState[87]) && (keyState[37] || keyState[65])){
        diagoGauche();
      }
    //diagoBasDroit
    if ((keyState[40] || keyState[83]) && (keyState[39] || keyState[68])){
      diagoBasDroit();
    }
    //diagoBasGauche
    if ((keyState[40] || keyState[83]) && (keyState[37] || keyState[65])){
      diagoBasGauche();
    }
    //ShowFPS
    if (keyState[73]){
      showFPS = !showFPS;
    }
    //Décoller
    if(keyState[69] && (bX === -1168) && ((y<pY) && ((y+100)>pY))){
      confirm( "Quitter cette planète et repartir à l'aventure ?" );
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
    pSrcX= 0;
    pSrcY= 800;
    }

    function initHaut(){
      playerWidth = 100;
      playerHeight = 100;
      pRows = 1;
      pCols = 1;
      pWidth = playerWidth/pCols;
      pHeight = playerHeight/pRows;
      pCurFrame = 0;
      pFrameCount = 1;
      pSrcX= 0;
      pSrcY= 1150;
      }

      function initDroite(){
        playerWidth = 100;
        playerHeight = 100;
        pRows = 1;
        pCols = 1;
        pWidth = playerWidth/pCols;
        pHeight = playerHeight/pRows;
        pCurFrame = 0;
        pFrameCount = 1;
        pSrcX= 0;
        pSrcY= 920;
        }

        function initGauche(){
          playerWidth = 100;
          playerHeight = 100;
          pRows = 1;
          pCols = 1;
          pWidth = playerWidth/pCols;
          pHeight = playerHeight/pRows;
          pCurFrame = 0;
          pFrameCount = 1;
          pSrcX= 0;
          pSrcY= 1035;
          }

    function droit(){
      playerWidth = 800;
      pCols = 8;
      pFrameCount = 8;
      pSrcY= 200;
    }

    function gauche(){
      playerWidth = 800;
      pCols = 8;
      pFrameCount = 8;
      pSrcY= 100;
      }

    function haut(){
      playerWidth = 800;
      pCols = 8;
      pFrameCount = 8;
      pSrcY= 300;
      }

    function bas(){
      playerWidth = 800;
      pCols = 8;
      pFrameCount = 8;
      pSrcY= 0;
      }

    function diagoDroit(){
      playerWidth = 800;
      pCols = 8;
      pFrameCount = 8;
      pSrcY= 700;
    }

    function diagoGauche(){
      playerWidth = 800;
      pCols = 8;
      pFrameCount = 8;
      pSrcY= 500;
    }

    function diagoBasDroit(){
      playerWidth = 800;
      pCols = 8;
      pFrameCount = 8;
      pSrcY= 600;
    }

    function diagoBasGauche(){
      playerWidth = 800;
      pCols = 8;
      pFrameCount = 8;
      pSrcY= 400;
    }

    function draw(){
      updateFrame();
      ctx.drawImage(background,bX,bY);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX,aY-400,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+190,aY+580,280,320);
      ctx.drawImage(widowMaker,srcX,srcY,width,height,x,y,280,320);
      ctx.drawImage(player,pSrcX,pSrcY,pWidth,pHeight,pX,pY,pWidth,pHeight);

      //dessine les FPS
      if(showFPS){
      ctx.font="20px helvetica";
      ctx.fillText(`FPS: ${valueFPS.toFixed(0)}`, 10, 20);
      }
      //Invitation à décoller
      if((bX === -1168) && ((y<pY) && ((y+100)>pY))){
        ctx.font="18px helvetica";
        ctx.fillText(`Appuyer sur E pour interagir`, pX + 20, pY - 20);
      }
    }
    setInterval(draw,60);
  }
}
