var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	ground = createSprite(width/2,700,800,10);

	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
    rectangleBody = Bodies.circle(width/2,700,10,{restitution:0,isStatic:true});
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	boxPosition=width/2-100;
	boxY=610;

	boxleftSprite=createSprite(boxPosition,boxY,20,100);
	boxleftSprite.shapeColor=color("red");

	boxLeftBody = Bodies.rectangle(boxPosition+20,boxY,20,200,{isStatic:true});
	World.add(world,boxLeftBody);

    boxBase=createSprite(boxPosition+100,boxY+40,200,20);
	boxBase.shapeColor=color("red");

	boxBottomBody = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{isStatic:true});
	World.add(world,boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200,boxY,20,100);
	boxleftSprite.shapeColor=color("red");

	boxRightBody = Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
    World.add(world,boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:-20,y:20};
	Matter.Body.translate(packageBody,translation);
      Matter.Body.setStatic(packageBody,false);
  }else if (keycode===DOWN_ARROW){
    Matter.Body.setStatic(packageBody,false);

  }
}



