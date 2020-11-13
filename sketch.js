const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var object1,ball, box1;

function setup() {
  createCanvas(800,800);
engine = Engine.create();
world = engine.world;

 ground = new Ground(400,775,800,50); 
 
 

 

 box1= new Box(100,200,50,50);
 box2= new Box(110,100,70,70);
}

function draw() {
  background(0); 
  
  Engine.update(engine);

box1.display();
box2.display();
  ground.display();

  
}