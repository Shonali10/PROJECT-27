
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var Bob1,Bob2,Bob3,Bob4,Bob5;
var Roof;
var Rope1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    Roof = new roof(350,100,400,40)

	Bob1 = new bob(300,500,25);
	Bob2 = new bob(350,500,25);
    Bob3 = new bob(400,500,25);
    Bob4 = new bob(450,500,25);
    Bob5 = new bob(500,500,25);

  Rope1 = new rope(Bob1.body, Roof.body,-100,0)
  Rope2 = new rope(Bob2.body, Roof.body,-50,0)
  Rope3 = new rope(Bob3.body, Roof.body,0,0)
  Rope4 = new rope(Bob4.body, Roof.body,50,0)
  Rope5 = new rope(Bob5.body, Roof.body,100,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Roof.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
 
}



