
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bola 
let engine
let world
var chao
var parede1
var parede2


function preload()
{
	
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  
var bola_options={
restitution:0.60,
frictionAir:0.01
}
var chao_options = {
isStatic : true
}
var parede1_options={
isStatic : true	
}
var parede2_options={
isStatic : true	
}


bola = Bodies.circle(200,150,20,bola_options)
 World.add(world,bola)

chao = Bodies.rectangle(900,400,9999,10,chao_options);
World.add(world,chao);

parede1 = Bodies.rectangle(700,380,5,50,parede1_options);
World.add(world,parede1);

parede2 = Bodies.rectangle(600,380,5,50,parede2_options);
World.add(world,parede2);

}
	

function draw() {
  rectMode(CENTER);
  background("lightblue");
  drawSprites();
 
ellipse(bola.position.x,bola.position.y,20);
rect(chao.position.x,chao.position.y,9999,10);
rect(parede1.position.x,parede1.position.y,5,50);
rect(parede2.position.x,parede2.position.y,5,50);


}
  function keyPressed () {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:-0.05})
}
	
}


