var helicopterIMG, helicopterSprite,package1Body,package1,packageIMG;
var ground1,ground1Body,ground2,ground2Body,ground3,ground3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package1=createSprite(width/2,190,10,10);
	package1.addImage("package",packageIMG);
	package1.scale=0.4
	

	helicopterSprite=createSprite(width/2, 190, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1.4;

	ground1=createSprite(400, 670, width/2,20);
	ground1.shapeColor="red";

	ground2=createSprite(200, 505, 20,height/2);
	ground2.shapeColor="red";

	ground3=createSprite(600, 505, 20,height/2);
	ground3.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	

	package1Body = Bodies.rectangle(width/2, 190, 10, 10 , {isStatic:true} );
 	World.add(world, package1);

	//Create a Ground
	ground1Body = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground1);
	 
	 ground2Body = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground2);
	 
	 ground3Body = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  package1.x=package1Body.position.x;
  package1.y=package1Body.position.y;
 
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(package1, false);
	
  }
}



