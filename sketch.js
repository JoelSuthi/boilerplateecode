	var paper,ground,trash1,trash2,trash3;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Render = Matter.Render;

	function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,710,50,50);
	trash1 = new Trash(515,700,20,100);
	trash2 = new Trash(600,740,150,20);
	trash3 = new Trash(675,700,20,100);
	ground = new Ground(400,750,800,10);

	Engine.run(engine);
	}


	function draw() {
	rectMode(CENTER);

	background(0);

	drawSprites();

	keyPressed();

	paper.display();
	trash1.display();
	trash2.display();
	trash3.display();
	ground.display(); 
	keyPressed();	
	}
	function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper,paper.position,(x=50,y=710));
	
	}
    }
