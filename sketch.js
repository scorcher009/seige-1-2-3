//Creating Constraints
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Creating variables
var ground,holder1,holder2,hulk;
var brick1,brick2,brick3,brick4,brick5;
var brick6,brick7,brick8,brick9,brick10,brick11,brick12;
var brick13,brick14,brick15;

var chain;

function preload()
{
	
}

function setup() {
  createCanvas(900, 700);
  
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   hulk = new Hulk(300,300,10,10);
          brick1 = new Brick(700,175,15);
           brick2 = new Brick(650,175,15);
          brick3 = new Brick(600,175,15);
      brick4 = new Brick(530,450,15);
      brick5 = new Brick(680,450,15);
      brick6 = new Brick(630,450,15);
      brick7 = new Brick(550,400,15);
      brick8 = new Brick(600,400,15);
      brick9 = new Brick(580,450,15);
      brick10 = new Brick(650,400,15);
      brick11 = new Brick(570,350,15);
      brick12 = new Brick(620,350,15);
          brick13 = new Brick(630,125,15);
          brick14 = new Brick(680,125,15);
          brick15 = new Brick(660,75,15); 

   ground = new Ground(400,700,1500,25);
   
   holder1 = new Holder(600,470,210,5);
   holder2 = new Holder(650,200,175,5);
  

  chain = new Chain(hulk.body,{x:175, y:380});   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();

  hulk.display();
   
  ground.display();

  chain.display();

  holder1.display();
  holder2.display();

  drawSprites();

 
}

function mouseDragged(){

	Matter.Body.setPosition(hulk.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

chain.fly();

}

function keyPressed(){

	if(keyCode===32){
	chain.attach(hulk.body);
	
	}
		
	}