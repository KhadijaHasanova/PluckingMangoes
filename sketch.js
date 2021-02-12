
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;

var mango1,mango2,mango3,mango4,mango5,mango7,mango8,mango9,mango10;

var stone;

var tree;

var ground;

var line;

function preload() {
	boyImage = loadImage("images/boy.png");
}

function setup() {
	//create the canvas
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//create the boy
	boy = createSprite(200,600);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	//create the mangoes
	mango1 = new Mango(600,200);
	mango2 = new Mango(1000,220);
	mango3 = new Mango(900,200);
	mango4 = new Mango(800,220);
	mango5 = new Mango(720,210);	
	mango6 = new Mango(700,120);
	mango7 = new Mango(800,100);
	mango8 = new Mango(880,125);
	mango9 = new Mango(850,270);
	mango10 = new Mango(650,280);

	//create the tree
	tree = new Tree(500,50);

	//create the ground
	ground = new Ground(600,650,1600,50);

	//create the stone
	stone = new Stone(110,520);

	//create the constraint
	line = new Launcher(stone.body,{x:200,y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //set the background color
  background("lightblue");

  //display the tree
  tree.display();

  //display the mangoes
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();  
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  //display the ground
  ground.display();

  //display the stone
  stone.display();

  //display the line
  line.display();
  
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased() {
	line.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235,y:420});
		launcherObject.attach(stone.body);
	}
}

