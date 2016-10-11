var a= 1300;
var b = 375;
//var xspeed = 3;
//var yspeed = 3;

function setup() {
  createCanvas(750,1334);
  
  for (var x = 0; x<1000; x=x+40){
      fill(255,20,50);
      noStroke();
      rect(random(0,750), x , random(10,150), random(10,150));
    
  

 
}
}

function draw() {
  
  if(accelerationY>.01)
  {
  a=a+(accelerationY-pAccelerationY)
  }
  else {a=a-1;}
  
  if (accelerationX >.01)
  {
  b=b+(accelerationX-pAccelerationX)
  }
 
  fill(0,0,255);
  ellipse(b,a,20,20);
  
    }
