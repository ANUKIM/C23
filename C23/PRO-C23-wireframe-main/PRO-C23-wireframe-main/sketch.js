const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var T,cannon,angle
function preload(){
backgroundImg = loadImage("background.gif");
 towerImage = loadImage("tower.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
   T=new Tower(150,350,150,310)
   angle=-PI/4
   cannon = new Cannon(180, 110, 100, 50, angle);
   ground = new Ground(0, height - 1, width * 2, 1);
    
}

function draw(){
    image(backgroundImg, 0, 0, width, height);
    Engine.update(engine);
    ground.display()
    T.display()
   cannon.display()
  
}
