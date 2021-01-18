var tom, jerry, background1, background1Img;
var tomAnimation, jerryAnimation;
var tom1Img, tom2Img, tom3Img, tom4Img;
var jerry1Img, jerry2Img, jerry3Img, jerry4Img;

function preload() {
    tom1Img = loadImage("images/tomOne.png");
    tom2Img = loadImage("images/tomTwo.png");
    tom3Img = loadImage("images/tomThree.png");
    tom4Img = loadImage("images/tomFour.png");

    tomAnimation = loadAnimation(tom2Img,tom3Img);

    jerry1Img = loadImage("images/jerryOne.png");
    jerry2Img = loadImage("images/jerryTwo.png");
    jerry3Img = loadImage("images/jerryThree.png");
    jerry4Img = loadImage("images/jerryFour.png");

    jerryAnimation = loadAnimation(jerry2Img,jerry3Img);

    background1Img = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,850);
    
    background1 = createSprite(500,400,1000,1000);
    background1.addImage(background1Img);
    
    tom = createSprite(800,650,10,10);
    tom.addAnimation("runningTom",tomAnimation);
    tom.addImage("sleepingTom",tom1Img);
    tom.addImage("sittingTom",tom4Img);
    tom.changeImage('sleepingTom');
    tom.scale = 0.15;

    jerry = createSprite(200,650,10,10);
    jerry.addAnimation("tauntingJerry",jerryAnimation);
    jerry.addImage("eatingJerry",jerry1Img);
    jerry.addImage("investigatorJerry",jerry4Img);
    jerry.changeImage("eatingJerry");
    jerry.scale = 0.15;

    //tom.debug = true;
    tom.setCollider("rectangle",0,0,1100,900,0);
    
    //jerry.debug = true;
    jerry.setCollider("rectangle",0,0,600,900,0);
}

function draw() {
background(0);

    if(tom.isTouching(jerry)) {
        tom.changeImage("sittingTom");
        jerry.changeImage("investigatorJerry");
        tom.velocityX = 0;
        tom.scale = 0.17;
    }

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.changeAnimation("runningTom",tomAnimation);
        tom.scale = 0.17;
        jerry.changeAnimation("tauntingJerry",jerryAnimation);
    }
}