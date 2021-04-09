
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1, ground,line1,line2,line3;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(700, 700);
    engine = Engine.create();
	world = engine.world;
    
	ground = new Ground(width/2,690,width,30);
	line1 = new Dustbin(width/2+40,660,200,25);
	line2 = new Dustbin(width/2-70,610,20,100);
	line3 = new Dustbin(width/2+150,610,20,100);
	paper1 = new Paper(30,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  paper1.display();
}


function keyPressed(){
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
  }
}
