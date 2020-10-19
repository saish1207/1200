 var bullet , wall,thickness  ;
var speed , weight ;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(50, 200, 50, 50);

  speed = random (1,40) ;
  weight = random (400,1500) ;
  thickness = random (22,83);

  bullet.velocityX = speed ;
}

function draw() {
  background(255,255,255); 
  
if(isTouching()){
  var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor = "red";
  }

  if(damage<10){
    wall.shapeColor = "green";
  }

}

  drawSprites();
}

  
