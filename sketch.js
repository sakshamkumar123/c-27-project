
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,300,300,40)

	ball1= new Ball(400,500,50)
	ball2= new Ball(450,500,50)
	ball3= new Ball(500,500,50)
	ball4= new Ball(350,500,50)
	ball5= new Ball(300,500,50)

	rope1=new Chain(ball1,roof,100,0)

     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  
  drawSprites();
 
}



