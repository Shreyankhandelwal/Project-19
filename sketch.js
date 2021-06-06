var person
var standingImg
var stepImg
var shootImg
var jumpImg

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  standingImg = loadImage("standing sprite.jpg")

  shootImg = loadAnimation("gun in hand.jpg","gun in hand 2.jpg","gun in hand 3.jpg",)

  stepImg = loadAnimation("flash step 1 .jpg","flash step 2 .jpg","flash step 3 .jpg")
  
  jumpImg = loadImage("jump sprite.jpg")
}

function setup() {

  createCanvas(400, 400);

  person = createSprite(50,350,20,15);
  person.addImage("standing",standingImg)

}

function draw() {

  background(180);
  
  if(gameState === PLAY){
  
  if(keyDown(RIGHT_ARROW)){
  
      person.changeAnimation("a",stepImg)
   
  }
  
  if(keyWentUp(RIGHT_ARROW)){
      
      person.changeImage("b",standingImg);
      
  }
  
  if(keyDown("S")){
  
      person.changeAnimation("m",shootImg)
      
  }
  
  if(keyWentUp("S")){
              
      person.changeImage("c",standingImg);
      
  }
  
  if(keyDown(UP_ARROW)){
  
      person.changeAnimation("g",jumpImg)
      person.velocityY = -5
       
  }
  
  if(keyWentUp(UP_ARROW)){
              
      person.changeImage("moved",standingImg);

      
  }

  person.velocityY = person.velocityY + 0.5

  } else if(gameState === END){

    person.changeImage("stop",standingImg)



  }











drawSprites();

}