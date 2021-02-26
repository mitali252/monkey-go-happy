var monkey,bananaGroup,stoneGroup,ground,invisiground,monkey_run,stone_Img,ground_Img,winlevel

function preload(){
  monkey_run = loadAnimation("monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png");
  
  stone_Img = loadImage("obstacle.png");
 ground_Img=loadImage("jungle.jpg ");
  banana_Img=loadImage("banana.png");
}


function setup() {
  createCanvas(800, 350);
  invisiground=createSprite(345,345,900,10)
   invisiground.addImage("background",ground_Img)
  invisiground.scale = 1.2
  bananaGroup=new Group();
  monkey = createSprite(50,180,20,50);
 monkey.addAnimation("running", monkey_run);
 monkey.scale = 0.09;
  ground=createSprite(345,345,900,10)
   invisiground . velocityX = -2
  
 BanaGroup=new Group();
  stoneGroup=new Group();
}

function draw() {
  background(220);
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
 
  if (invisiground.x < 0){
    invisiground.x = invisiground.width/2;
  }
  if(monkey.isTouching(BanaGroup)){
  BanaGroup.destroyEach();
  monkey.scale=monkey.scale+0.01  
}
  if(monkey.isTouching(stoneGroup)){
  stoneGroup.destroyEach();
  monkey.scale=monkey.scale-0.01
    
}
  
  monkey.collide(ground);
  spawnstone()
  spawnbana()
  
  drawSprites();
}
 function spawnstone(){
   if(frameCount % 140 === 0) {
    var stone = createSprite(900,330,10,40); 
    stone.velocityX = -4;
    stone.addImage("stone image", stone_Img);
    
    stone.scale = 0.1;
    stone.lifetime = 300;
    //add each obstacle to the group 
    stoneGroup.add(stone); 
   } 
 }
function spawnbana() {
  //write code here to spawn the clouds
  if (World.frameCount % 150 === 0) {
    var banana = createSprite(800,330,40,10);
   banana.y=Math.round(random(210,250));
  banana.addImage("Banana",banana_Img);
    banana.scale = 0.09;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
   banana.lifetime = 300;
    
    //adjust the depth
     
    
    //add each cloud to the group
    BanaGroup.add(banana);
  }
  
}
 
     
 