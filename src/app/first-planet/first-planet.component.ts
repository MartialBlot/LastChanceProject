import { Component, AfterViewInit } from '@angular/core';
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

    //Background
    let background = new Image();
    background.src = "assets/images/maptest.png";
    let bX = -1720;
    let bY = -1000;
    'app-modal'

    //Sprite Arbre
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

    // Sprite du vaisseau
    let widowMaker = new Image();
    widowMaker.src = "assets/images/widowMaker.png"
    let canvasWidth = 1200;
    let canvasHeight = 800;
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

    // Sprite de l'heroine
    let player = new Image();
    player.src = "assets/images/player.png"
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

    //Sprite Ours
    let ours = new Image();
    ours.src = "assets/images/ours.png"
    let oursWidth = 540;
    let oursHeight = 60;
    let oRows = 1;
    let oCols = 6;
    let oWidth = oursWidth/oCols;
    let oHeight = oursHeight/oRows;
    let oCurFrame = 0;
    let oFrameCount = 6;
    let oX=2400;
    let oY=840;
    let oSrcX= 0;
    let oSrcY= 60;

    //Sprite Loup
    let loup = new Image();
    loup.src = "assets/images/loup.png"
    let loupWidth = 840;
    let loupHeight = 110;
    let lRows = 1;
    let lCols = 6;
    let lWidth = loupWidth/lCols;
    let lHeight = loupHeight/lRows;
    let lCurFrame = 0;
    let lFrameCount = 6;
    let lX=750;
    let lY=320;
    let lSrcX= 0;
    let lSrcY= 0;

    canvas.width =  canvasWidth;
    canvas.height = canvasHeight;

    //Rafraichissement
    function updateFrame(){
      curFrame = ++curFrame % frameCount;
      srcX = curFrame * width;
      ctx.clearRect(x,y,width,height);

      oCurFrame = ++oCurFrame % oFrameCount;
        oSrcX = oCurFrame * oWidth;
        ctx.clearRect(oX,oY,oWidth,oHeight);
        animationOurs();

      lCurFrame = ++lCurFrame % lFrameCount;
        lSrcX = lCurFrame * lWidth;
        ctx.clearRect(lX,lY,lWidth,lHeight);
        animationLoup()

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
        speed = 3;
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
          oX-=speed;
          lX-=speed;
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
        oX+=speed;
        lX+=speed;
        gauche();
        vueInitHaut = false;
        vueInitBas = false;
        vueInitDroite = false;
        vueInitGauche = true;
      }
      //Control haut
      if ((keyState[38] || keyState[87]) && (bY < -600)){
        haut();
        y+=speed;
        bY+=speed;
        aY+=speed;
        oY+=speed;
        lY+=speed;
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
        oY-=speed;
        lY-=speed;
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
    if ((keyState[16])){
      speed=9
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

    //Deplacement ours
    let nbDeplacementOurs = 0;
    let oursDirDroit = true;
    let oursDirGauche = false;
    function animationOurs(){
      if(oursDirDroit){
        oSrcY= 60;
        oX+=9;
        nbDeplacementOurs+=1
        if(nbDeplacementOurs === 70){
          oursDirDroit = false;
          oursDirGauche = true;
          nbDeplacementOurs = 0;
        }
      }
      if(oursDirGauche){
        oSrcY= 135;
        oX-=9
        nbDeplacementOurs+=1
        if(nbDeplacementOurs === 70){
          oursDirDroit = true;
          oursDirGauche = false;
          nbDeplacementOurs = 0;
        }
      }
    }

    //Deplacement Loup
    let nbDeplacementLoup = 0;
    let loupDirDroit = true;
    let loupDirGauche = false;
    function animationLoup(){
      if(loupDirDroit){
        lSrcY= 0;
        lX+=12;
        nbDeplacementLoup+=1
        if(nbDeplacementLoup === 50){
          loupDirDroit = false;
          loupDirGauche = true;
          nbDeplacementLoup = 0;
        }
      }
      if(loupDirGauche){
        lSrcY= 110;
        lX-=12
        nbDeplacementLoup+=1
        if(nbDeplacementLoup === 50){
          loupDirDroit = true;
          loupDirGauche = false;
          nbDeplacementLoup = 0;
        }
      }
    }

    function draw(){
      //Rafraichissement
      updateFrame();
      //Map
      ctx.drawImage(background,bX,bY);
      //Arbres
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX,aY-400,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+190,aY+580,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+590,aY+380,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+290,aY+980,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+890,aY+280,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+990,aY-100,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+790,aY+1200,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1000,aY-400,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1900,aY+580,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1590,aY+380,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1290,aY+980,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1890,aY+280,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1790,aY-100,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1290,aY+1200,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+2190,aY+680,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+2390,aY-100,280,320);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+2490,aY+1200,280,320);
      //Vaisseau
      ctx.drawImage(widowMaker,srcX,srcY,width,height,x,y,280,320);
      //Ours
      let posXOurs1 = oX;
      let posXOurs2 = oX-1100;
      let posXOurs3 = oX-200;
      let posYOurs1 = oY;
      let posYOurs2 = oY+200;
      let posYOurs3 = oY-800;
      ctx.drawImage(ours,oSrcX,oSrcY,oWidth,oHeight,posXOurs1,posYOurs1,170,100);
      ctx.drawImage(ours,oSrcX,oSrcY,oWidth,oHeight,posXOurs2,posYOurs2,170,100);
      ctx.drawImage(ours,oSrcX,oSrcY,oWidth,oHeight,posXOurs3,posYOurs3,170,100);
      //Loup
      let posXLoup1 = lX-200;
      let posXLoup2 = lX+1100;
      let posXLoup3 = lX-400;
      let posYLoup1 = lY-280;
      let posYLoup2 = lY+1200;
      let posYLoup3 = lY+1400;
      ctx.drawImage(loup,lSrcX,lSrcY,lWidth,lHeight,posXLoup1,posYLoup1,110,80);
      ctx.drawImage(loup,lSrcX,lSrcY,lWidth,lHeight,posXLoup2,posYLoup2,110,80);
      ctx.drawImage(loup,lSrcX,lSrcY,lWidth,lHeight,posXLoup3,posYLoup3,110,80);

      if((((Math.abs(bX)-1000)>posXLoup1) && ((Math.abs(bX)-920)<posXLoup1+150)) && (((Math.abs(bX)-1000)<posXLoup1+150) && ((Math.abs(bX)-920)>posXLoup1)) && ((bY < -646)&&(bY > -716))){
        alert('collision')
      }

      //Heroine
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
    setInterval(draw,70);
  }
}
