var car;
var wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,100);
  weight = random(400,1500);

  car = createSprite(200,200,40,40);

  wall = createSprite(1500,200,40,height/2);

  car.velocityX = speed;

}

function draw() {

  background(255,255,255);  

  if ( wall.x - car.x < car.width/2 + wall.width/2
    && car.x - wall.x < wall.width/2 + car.width/2
    && wall.y - car.y < car.height/2 + wall.height/2
    && car.y - wall.y < wall.height/2 + car.height/2 ){

    car.velocityX = 0;

    var deformation = ((0.5*weight*speed*speed)/22500);

   if (deformation>180){
     car.shapeColor = color(255,0,0);
   } 

   if(deformation<180 && deformation>100){
     car.shapeColor = color(230,230,0);
   }

   if(deformation<100){
     car.shapeColor = color(0,255,0);
   }
 }

  car.display();
  wall.display();

  drawSprites();
}