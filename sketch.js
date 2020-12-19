const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform,polyImg;
var bird, slingShot;
var mainground;
var ground1;
var block1;
var polygon
function preload() {
    this.polyIMG = loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    mainground = new Ground(600,height,1200,20);
     platform = new Ground (150,400,200,200)
    ground1 = new Ground(482,340,230,08);
    ground2 = new Ground(875,220,170,08)

    
     
    

    Block1 = new Block(390,339,30,35);
    Block2 = new Block(420,339,30,35);
    Block3 = new Block(450,339,30,35);
    Block4 = new Block(480,339,30,35);
    Block5 = new Block(510,339,30,35);
    Block6 = new Block(540,339,30,35);
    Block7 = new Block(570,339,30,35);
    Block8 = new Block(405,269,25,30);
    Block9 = new Block(435,269,25,30);
    Block10 = new Block(464,269,25,30);
    Block11 = new Block(495,269,25,30);
    Block12 = new Block(526,269,25,30);
    Block13 = new Block(419,240,25,30);
    Block14 = new Block(449,240,25,30);
    Block15 = new Block(480,240,25,30);
    Block16 = new Block(434,213,20,25);


    block1 = new Block(818,219,30,35);
    block2 = new Block(847,219,30,35);
    block3 = new Block(876,219,30,35);
    block4 = new Block(900,219,30,35);
    block5 = new Block(928,219,30,35);
    block6 = new Block(832,166,25,30);
    block7 = new Block(859,167,25,30);
    block8 = new Block(886,167,25,30);
    block9 = new Block(845,140,20,25);
    
    polygon = Bodies.circle(100,200,20);
    World.add(world,polygon);

    slingShot = new Slingshot(this.polygon,{x:100,y:200})

    
    
}

    function draw(){
        background("black");
        Engine.update(engine);

        noStroke();
        fill("black");
        platform.display(); 

        fill("brown")
        ground1.display();
        ground2.display();
        mainground.display();
        
        slingShot.display();

        fill("lightblue");
        Block1.display();
        Block2.display();
        Block3.display();
        Block4.display();
        Block5.display();
        Block6.display();
        Block7.display();
        fill("pink")
        Block8.display();
        Block9.display();
        Block10.display();
        Block11.display();
        Block12.display();
        fill("lightgreen")
        Block13.display();
        Block14.display();
        Block15.display();
        fill("white")
        Block16.display();
        

        fill("lightblue");
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        fill("lightgreen");
        block6.display();
        block7.display();
        block8.display();
        fill("pink");
        block9.display()

   imageMode(Center) 
   image(this.polyIMG,polygon.position.x, polygon.position.y,20,20);

    
    }

