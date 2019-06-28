import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-second-planet',
  templateUrl: './second-planet.component.html',
  styleUrls: ['./second-planet.component.css']
})
export class SecondPlanetComponent implements AfterViewInit {

  constructor() { }

  public ngAfterViewInit() {
    let canvas : any= document.getElementById('map');
    let ctx = canvas.getContext("2d");

    //Background
    let background = new Image();
    background.src = "assets/images/planeteGlace.png";
    let bX = -1720;
    let bY = -1000;
    'app-modal'

    //Sprite Arbre
    let arbre = new Image();
    arbre.src = "assets/images/iceBerg.png";
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
    let aSrcX= 0;
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
    let ressource = 0;

    //Sprite Ours
    let ours = new Image();
    ours.src = "assets/images/yeti.png"
    let oursWidth = 200;
    let oursHeight = 50;
    let oRows = 1;
    let oCols = 5;
    let oWidth = oursWidth/oCols;
    let oHeight = oursHeight/oRows;
    let oCurFrame = 0;
    let oFrameCount = 5;
    let oX=2400;
    let oY=840;
    let oSrcX= 0;
    let oSrcY= 50;

    //Sprite Loup
    let loup = new Image();
    loup.src = "assets/images/levian.png"
    let loupWidth = 240;
    let loupHeight = 40;
    let lRows = 1;
    let lCols = 4;
    let lWidth = loupWidth/lCols;
    let lHeight = loupHeight/lRows;
    let lCurFrame = 0;
    let lFrameCount = 4;
    let lX=750;
    let lY=320;
    let lSrcX= 0;
    let lSrcY= 0;

    //Sprite Meat
    let meat = new Image();
    meat.src = "assets/images/meat.png"
    let meatWidth = 260;
    let meatHeight = 130;
    let mRows = 1;
    let mCols = 1;
    let mWidth = meatWidth/mCols;
    let mHeight = meatHeight/mRows;
    let mCurFrame = 0;
    let mFrameCount = 1;
    let mX=2500;
    let mY=800;
    let mSrcX= 0;
    let mSrcY= 0;
    let showMeat = true;


    //Sprite uranium
    let uranium = new Image();
    uranium.src = "assets/images/uranium.png"
    let uraniumWidth = 260;
    let uraniumHeight = 130;
    let uRows = 1;
    let uCols = 1;
    let uWidth = uraniumWidth/uCols;
    let uHeight = uraniumHeight/uRows;
    let uCurFrame = 0;
    let uFrameCount = 1;
    let uX=1440;
    let uY=20;
    let uSrcX= 0;
    let uSrcY= 0;
    let showUranium = true;


    //Sprite metal
    let metal = new Image();
    metal.src = "assets/images/metal.png"
    let metalWidth = 260;
    let metalHeight = 130;
    let mtRows = 1;
    let mtCols = 1;
    let mtWidth = metalWidth/mtCols;
    let mtHeight = metalHeight/mtRows;
    let mtCurFrame = 0;
    let mtFrameCount = 1;
    let mtX=540;
    let mtY=1660;
    let mtSrcX= 0;
    let mtSrcY= 0;
    let showMetal = true;

    //Sprite bois
    let bois = new Image();
    bois.src = "assets/images/wood.png"
    let boisWidth = 260;
    let boisHeight = 130;
    let boRows = 1;
    let boCols = 1;
    let boWidth = boisWidth/boCols;
    let boHeight = boisHeight/boRows;
    let boCurFrame = 0;
    let boFrameCount = 1;
    let boX=3040;
    let boY=160;
    let boSrcX= 0;
    let boSrcY= 0;
    let showWood = true;

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
      console.log(bX,bY)
      //Control droit
      if ((keyState[39] || keyState[68]) && (bX > -4190)){
          bX-=speed;
          x-=speed;
          aX-=speed;
          oX-=speed;
          lX-=speed;
          mX-=speed;
          uX-=speed;
          mtX-=speed;
          boX-=speed;
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
        mX+=speed;
        uX+=speed;
        mtX+=speed;
        boX+=speed;
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
        mY+=speed;
        uY+=speed;
        mtY+=speed;
        boY+=speed;
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
        mY-=speed;
        uY-=speed;
        mtY-=speed;
        boY-=speed;
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
      if(ressource===4){
        confirm( "Quitter cette planète et repartir à l'aventure ?" );
        } else {
          alert("Vous n'avez pas encore découvert toutes les ressources")
        }
    }
    //Action ramasser Metal
    if(showMetal){
    if(keyState[69] && ((bY < -2230) && (bY > -2300)) && ((bX < -1450) && (bX > -1537))){
      showMetal = false;
      ressource++;
      }
    }
    //Action ramasser Meat
    if(showMeat){
      if(keyState[69] && ((bX < -3415) && (bX > -3484)) && ((bY < -1378) && (bY > -1432))){
        showMeat = false;
        ressource++;
        }
      }
    //Action ramasser Uranium
    if(showUranium){
      if(keyState[69] && ((bX < -2359) && (bX > -2419)) && ((bY < -598) && (bY > -682))){
        showUranium = false;
        ressource++;
        }
      }
      //Action ramasser Bois
    if(showWood){
      if(keyState[69] && ((bX < -3952) && (bX > -4030)) && ((bY < -742) && (bY > -805))){
        showWood = false;
        ressource++;
        }
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
        oSrcY= 50;
        oX+=9;
        nbDeplacementOurs+=1
        if(nbDeplacementOurs === 70){
          oursDirDroit = false;
          oursDirGauche = true;
          nbDeplacementOurs = 0;
        }
      }
      if(oursDirGauche){
        oSrcY= 0;
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
        lSrcY= 40;
        lX+=12;
        nbDeplacementLoup+=1
        if(nbDeplacementLoup === 50){
          loupDirDroit = false;
          loupDirGauche = true;
          nbDeplacementLoup = 0;
        }
      }
      if(loupDirGauche){
        lSrcY= 0;
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
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX,aY-400,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+190,aY+580,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+590,aY+380,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+290,aY+980,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+890,aY+280,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+990,aY-100,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+790,aY+1200,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1000,aY-400,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1900,aY+580,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1590,aY+380,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1290,aY+980,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1890,aY+280,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1790,aY-100,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+1290,aY+1200,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+2190,aY+680,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+2390,aY-100,480,520);
      ctx.drawImage(arbre,aSrcX,aSrcY,aWidth,aHeight,aX+2490,aY+1200,480,520);
      //Vaisseau
      ctx.drawImage(widowMaker,srcX,srcY,width,height,x,y,280,320);
      //Ours
      let posXOurs1 = oX;
      let posXOurs2 = oX-1100;
      let posXOurs3 = oX-200;
      let posYOurs1 = oY;
      let posYOurs2 = oY+200;
      let posYOurs3 = oY-800;
      ctx.drawImage(ours,oSrcX,oSrcY,oWidth,oHeight,posXOurs1,posYOurs1,170,250);
      ctx.drawImage(ours,oSrcX,oSrcY,oWidth,oHeight,posXOurs2,posYOurs2,170,250);
      ctx.drawImage(ours,oSrcX,oSrcY,oWidth,oHeight,posXOurs3,posYOurs3,170,250);
      //Loup
      let posXLoup1 = lX-200;
      let posXLoup2 = lX+1100;
      let posXLoup3 = lX-400;
      let posYLoup1 = lY-280;
      let posYLoup2 = lY+1200;
      let posYLoup3 = lY+1400;
      ctx.drawImage(loup,lSrcX,lSrcY,lWidth,lHeight,posXLoup1,posYLoup1,120,90);
      ctx.drawImage(loup,lSrcX,lSrcY,lWidth,lHeight,posXLoup2,posYLoup2,120,90);
      ctx.drawImage(loup,lSrcX,lSrcY,lWidth,lHeight,posXLoup3,posYLoup3,120,90);

      //Essai Collision loup
      // if((((Math.abs(bX)-1000)>posXLoup1) && ((Math.abs(bX)-920)<posXLoup1+150)) && (((Math.abs(bX)-1000)<posXLoup1+150) && ((Math.abs(bX)-920)>posXLoup1)) && ((bY < -646)&&(bY > -716))){
      //   alert('collision')
      // }
      //Meat
      if(showMeat){
      ctx.drawImage(meat,mSrcX,mSrcY,mWidth,mHeight,mX,mY,40,20);
      }
      //Uranium
      if(showUranium){
      ctx.drawImage(uranium,uSrcX,uSrcY,uWidth,uHeight,uX,uY,90,50);
      }
      //Metal
      if(showMetal){
      ctx.drawImage(metal,mtSrcX,mtSrcY,mtWidth,mtHeight,mtX,mtY,80,50);
      }
      //Bois
      if(showWood){
      ctx.drawImage(bois,boSrcX,boSrcY,boWidth,boHeight,boX,boY,180,150);
      }
      //Heroine
      ctx.drawImage(player,pSrcX,pSrcY,pWidth,pHeight,pX,pY,pWidth,pHeight);
      //dessine les FPS
      if(showFPS){
      ctx.font="20px helvetica";
      ctx.fillText(`FPS: ${valueFPS.toFixed(0)}`, 30, 70);
      }
      //Ressources
      ctx.font="20px helvetica";
      ctx.fillText(`Ressource(s): ${ressource}`, 290, 35);
      //Invitation à décoller
      if((bX === -1168) && ((y<pY) && ((y+100)>pY))){
        ctx.font="18px helvetica";
        ctx.fillText(`Appuyer sur E pour interagir`, pX + 20, pY - 20);
      }
      //Ramasser Metal
      if(showMetal){
      if(((bY < -2230) && (bY > -2300)) && ((bX < -1450) && (bX > -1537))){
        ctx.font="18px helvetica";
        ctx.fillText(`Appuyer sur E pour ramasser`, pX + 20, pY - 20);
        }
      }
      //Ramasser Meat
      if(showMeat){
        if(((bX < -3415) && (bX > -3484)) && ((bY < -1378) && (bY > -1432))){
          ctx.font="18px helvetica";
          ctx.fillText(`Appuyer sur E pour ramasser`, pX + 20, pY - 20);
          }
        }
        //Ramasser Uranium
      if(showUranium){
        if(((bX < -2359) && (bX > -2419)) && ((bY < -598) && (bY > -682))){
          ctx.font="18px helvetica";
          ctx.fillText(`Appuyer sur E pour ramasser`, pX + 20, pY - 20);
          }
        }
        //Ramasser Bois
      if(showWood){
        if(((bX < -3952) && (bX > -4030)) && ((bY < -742) && (bY > -805))){
          ctx.font="18px helvetica";
          ctx.fillText(`Appuyer sur E pour ramasser`, pX + 20, pY - 20);
          }
        }
    }
    setInterval(draw,70);
  }
}

