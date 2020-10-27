var bullet,wall;
var thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,10,10);
  bullet.shapeColor=color("white");
  bullet.velocityX=speed;
  wall=createSprite(1300,200,thickness,height/2);
  wall.shapeColor=color("white");
}

function draw() {
  background("black");  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(deformation>10){
      wall.shapeColor=color("red");
    }
    if(deformation<10){
      wall.shapeColor=color("green");
    }
  }
  drawSprites();
}