var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 100, 100);
}

function draw() 
{
  background(30);
  drawSprites()
  if(keyIsDown(UP_ARROW)){
    box.y -= 5
  }
  elsenif(keyIsDown(DOWN_ARROW)){
    box.y += 5
}




