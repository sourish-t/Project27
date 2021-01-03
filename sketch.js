
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roofObj,chain;
var engine,world;
var chain1,chain2, chain3, chain4, chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(20,20,50);
	bob2=new Bob(220,30,50);
	bob3=new Bob(200,175,50);
	bob4=new Bob(50,50,50);
	bob5=new Bob(100,60,50);

	roofObj=new Roof(400,350,150,500);

	chain1=new Chain(bob1.body,roof.body,-bobDiameter*2,0);
	chain2=new Chain(bob2.body,roof.body,-bobDiameter*2,0);
	chain3=new Chain(bob3.body,roof.body,-bobDiameter*2,0);
	chain4=new Chain(bob4.body,roof.body,-bobDiameter*2,0);
	chain5=new Chain(bob5.body,roof.body,-bobDiameter*2,0);

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			'width':1800,
			'height': 1700,
			'wireframes': false

		}
	});
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



