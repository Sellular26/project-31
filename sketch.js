const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  particle = new Particle(120, -30, 15)

  obstacle1 = new Obstacle(30, 100, 20);
  obstacle2 = new Obstacle(100, 100, 20);
  obstacle3 = new Obstacle(180, 100, 20);
  obstacle4 = new Obstacle(260, 100, 20);
  obstacle5 = new Obstacle(340, 100, 20);
  obstacle6 = new Obstacle(420, 100, 20);
  obstacle7 = new Obstacle(70, 160, 20);
  obstacle8 = new Obstacle(150, 160, 20);
  obstacle9 = new Obstacle(230, 160, 20);
  obstacle10 = new Obstacle(330, 160, 20);
  obstacle11 = new Obstacle(410, 160, 20);
  obstacle12 = new Obstacle(30, 220, 20);
  obstacle13 = new Obstacle(120, 220, 20);
  obstacle14 = new Obstacle(200, 220, 20);
  obstacle15 = new Obstacle(280, 220, 20);
  obstacle16 = new Obstacle(360, 220, 20);
  obstacle17 = new Obstacle(440, 220, 20);
  obstacle18 = new Obstacle(70, 280, 20);
  obstacle19 = new Obstacle(150, 280, 20);
  obstacle20 = new Obstacle(230, 280, 20);
  obstacle21 = new Obstacle(330, 280, 20);
  obstacle22 = new Obstacle(410, 280, 20);
  obstacle23 = new Obstacle(30, 360, 20);
  obstacle24 = new Obstacle(120, 360, 20);
  obstacle25 = new Obstacle(200, 360, 20);
  obstacle26 = new Obstacle(280, 360, 20);
  obstacle27 = new Obstacle(360, 360, 20);
  obstacle28 = new Obstacle(440, 360, 20);
  obstacle29 = new Obstacle(70, 440, 20);
  obstacle30 = new Obstacle(150, 440, 20);
  obstacle31 = new Obstacle(230, 440, 20);
  obstacle32 = new Obstacle(330, 440, 20);
  obstacle33 = new Obstacle(410, 440, 20);
}

function draw() {
  background(100);  

  Engine.update(engine);

  particle.display();

  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  obstacle4.display();
  obstacle5.display();
  obstacle6.display();
  obstacle7.display();
  obstacle8.display();
  obstacle9.display();
  obstacle10.display();
  obstacle11.display();
  obstacle12.display();
  obstacle13.display();
  obstacle14.display();
  obstacle15.display();
  obstacle16.display();
  obstacle17.display();
  obstacle18.display();
  obstacle19.display();
  obstacle20.display();
  obstacle21.display();
  obstacle22.display();
  obstacle23.display();
  obstacle24.display();
  obstacle25.display();
  obstacle26.display();
  obstacle27.display();
  obstacle28.display();
  obstacle29.display();
  obstacle30.display();
  obstacle31.display();
  obstacle32.display();
  obstacle33.display();


  drawSprites();
}