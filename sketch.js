
var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);
  var dog=createSprite(200,100,20,20)
  dog.image=loadImage("dog")
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);
}


function draw() {  
  background(46,139,87)

if(keyWentDown(UP_ARROW)){
writestock(foodS)
dog.addImage(happydog)
}

  drawSprites();
  //add styles here
textSize(35)
fill("green")
stroke(10)
}
function readstock(data){
foodS=data.val();
}

function writestock(x){
  if(x<=0){
  x=0;
  }
  else{
    x=x-1;

  }
  database.ref('/').update({
    Food:x
  })
}
