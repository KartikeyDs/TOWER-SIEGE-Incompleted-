const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2;


function setup() {
	createCanvas(1200, 400);
    
    engine = Engine.create();
	world = engine.world;
    
    ground1 = new Ground(400,370,700,20);
  
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();

  drawSprites();
 
}