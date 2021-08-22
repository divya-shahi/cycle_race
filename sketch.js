var path,mainCyclist;
var pathImg,mainRacerImg1, mainRacerImg2;
var opc1, opc1img;
var opc2, opc2img;
var opc3, opc3img;

var yellowGroup, redGroup, pinkGroup;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

var cycleBell;

function preload(){
  pathImg = loadImage("Road.png");
  mainRacerImg1 =   loadAnimation("mainPlayer1.png","mainPlayer2.png");
  mainRacerImg2= loadAnimation("mainPlayer3.png");
  
  opc1img=loadAnimation("opponent4.png","opponent5.png");


  opc2img=loadAnimation("opponent1.png","opponent2.png");

  opc3img=loadAnimation("opponent7.png","opponent8.png");

  cycleBell= loadSound("bell.mp3");
}
function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
pinkGroup = new Group(); 
yellowGroup = new Group(); 
redGroup = new Group(); 
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   distance = distance + Math.round(getFrameRate()/60);
  
    if(keyDown("space")){
    cycleBell.play();
  }   
    edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
    path.velocityX= -(6+3*distance/150);
    
   var select_cycle = Math.round(random(1,3));
   console.log(select_cycle)
  
  if (frameCount % 130 == 0) {
    if (select_cycle == 1) {
      yellowCyclist();
    } else if (select_cycle == 2) {
      pinkCyclist();
    } else {
      redCyclist();
    }
  } 
  }
  }

function yellowCyclist(){
 opc1  = createSprite(200,150,20,20);
 opc1.y = Math.round(random(100,210));
 opc1.addAnimation("opc1cycling",opc1img);
 opc1.scale=0.06;
 opc1.velocityX= -(6+2*distance/150);
 yellowGroup.add(opc1);

}

function pinkCyclist(){
 opc2  = createSprite(200,Math.round(random(50,250)),20,20);
 opc2.y = Math.round(random(190,210));
 opc2.addAnimation("opc2cycling",opc2img);
 opc2.scale=0.06;
 opc2.velocityX= -(6+2*distance/150);
 pinkGroup.add(opc2);

}

function redCyclist(){
 opc3  = createSprite(200,150,20,20);
 opc3.y = Math.round(random(210,290));
 opc3.addAnimation("opc3cycling",opc3img);
 opc3.scale=0.06;
 opc3.velocityX= -(6+2*distance/150);
 redGroup.add(opc3);
  
  }






