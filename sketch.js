var tomImg1, tommImg2, tomImg3,tom, jerryImg1, jerryImg2, jerryimg3,jerry,bg;

function preload() {
    //load the images here
    tomImg1=loadAnimation("images/cat1.png")
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    tomImg3 = loadAnimation("images/cat4.png")

    jerryImg1=loadAnimation("images/mouse1.png")
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg3 = loadAnimation("images/mouse4.png")
    bg = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600)
    tom.addAnimation("tomsleeping",tomImg1)
    tom.scale = 0.2
    jerry= createSprite(200,600)
    jerry.addAnimation("jerrystanding",jerryImg1)
    jerry.scale = 0.2
    

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<tom.width/2-jerry.width/2){
    tom.velocityX = 0;
    tom.addAnimation("tomhappy",tomImg3)
    tom.x = 300
    tom.scale = 0.2
    tom.changeAnimation("tomhappy");
    jerry.addAnimation("jerryhappy",jerryImg3);
    jerry.scale = 0.2
    jerry.changeAnimation("jerryhappy")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW)
{
    tom.velocityX = -5
    tom.addAnimation("tomrunning",tomImg2);
    tom.chageAnimation("tomrunning")

    jerry.addAnimation("jerryrunning",jerryImg2);
    jerry.chageAnimation("jerryrunning")
}

}
