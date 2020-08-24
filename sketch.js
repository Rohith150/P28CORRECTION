
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1360, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = new Boy(100,530,200,300);
	stone = new Stone(40,450,50,50);
	tree = new Tree(1000,370,300,500);
	mango1 = new Mango(900,340,100);
	mango2 = new Mango(1100,340,100);
	mango3 = new Mango(1000,210,100);
	mango4 = new Mango(1000,340,100);
	ground = new Ground(680,620,1360,20);
	chain = new Chain(boy.body, stone.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210,210,210);

  detectColision(stone,mango1);
  detectColision(stone,mango2);
  detectColision(stone,mango3);
  detectColision(stone,mango4);
  
  boy.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  ground.display();

  drawSprites();
 
}

function detectColision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= Lmango.r + Lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:1000, y:450});
		//launcher.attach(stone.body);
	}
}