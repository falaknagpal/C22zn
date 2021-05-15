const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground;

function setup(){
  var canvas=createCanvas(1200,600);

  engine= Engine.create()
  world=engine.world

  var ground_options={
    isStatic: true
  }

  ground= Bodies.rectangle(600,580,1200,20,ground_options);
 World.add(world,ground)

 console.log(ground)
 console.log(ground.position.y)
}
function draw()
{  background(0);
  Engine.update(engine)

  rectMode(CENTER);
  fill("brown")
   rect(ground.position.x,ground.position.y,1200,20);
  
}
