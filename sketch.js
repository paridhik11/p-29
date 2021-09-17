const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var jointLink,jointPoint,bridge,ground,stone,lWall,rWall
var stones=[]

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(300,680,1000,20);

lWall=new Base(10,100,100,80);

rWall=new Base(790,100,100,80);

bridge=new Bridge(15,{x:-50,y:100})
jointPoint=new Base(790,100,600,10)

Matter.Composite.add(bridge.body,jointPoint)
jointLink=new Link(bridge,jointPoint)

for(var i=0;i<=8;i++){
  var x=random(width/2-200,width/2+300)
  var y=random(-10,100)
  var stone =new Stone(x,y,40)
  stones.push(stone)
  
}
}

function draw() {
  background("grey");
  Engine.update(engine);

 ground.show();
bridge.show();
lWall.show();
rWall.show();

for(var i of stones)
{
  i.show()
}

}

