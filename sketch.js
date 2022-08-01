const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var leftEdge;
var rightEdge;
// var top_wall;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,620,800,10);
  right = new Ground(600,565,10,120);
  left = new Ground(450,565,10,120);
  leftEdge = new Ground(10,400,10,800);
  rightEdge = new Ground(790,400,10,800);
  // top_wall = new Ground(200,10,400,20);
 

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  
  btn2 = createImg('up.png');
  btn2.position(260,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  var ball_options={
    restitution: 0.3
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  // top_wall.show();
  left.show();
  right.show();
  leftEdge.show();
  rightEdge.show();
  
  Engine.update(engine);
  // keyPressed();
}

function hForce()
{
  Matter.Body.applyForce(ball, {x:0, y:0 }, {x:0.03, y:0});
} 
  
function vForce()
{
  Matter.Body.applyForce(ball, {x:0, y:0 }, {x:0, y:-0.03});
}

function keyPressed() {
  
  if(keyCode("UP_ARROW")) {
    vForce();
    hForce();
    // applyForce on ball body
    
  }

}