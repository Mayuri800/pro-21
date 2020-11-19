var wall,thickness;
var speed,bullet, weight;


function setup() {
  createCanvas(1600,400);
  speed=random(20,30);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed;

  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = ("white");

 

}

function draw() {
  background("purple");
  
 if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      wall.shapeColor = ("green")
    }
    if(deformation<180 && deformation>100)
    {
      wall.shapeColor = ("blue");
    }
    if(deformation<100)
    {
      wall.shapeColor = ("red");
    }
 }
  
  drawSprites();
  
}
 
  
