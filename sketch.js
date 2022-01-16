var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("RED");
  btn_red.position(100,50);

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
}

function draw() {
  background(128,128,128)

  if(keyIsDown(LEFT_ARROW)){
    background(255,0,0)
  }
  if(keyIsDown(RIGHT_ARROW)){
    background(0,255,0)
  }
}