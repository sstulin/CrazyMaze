var a= 1300;
var b = 375;
//var xspeed = 3;
//var yspeed = 3;

function setup() {
  createCanvas(1334,750);
  
  for (var x = 0; x<1000; x=x+40){
      fill(255,20,50);
      noStroke();
      rect(x,random(0,750), random(10,150), random(10,150));
    
  

 
}
}

function draw() {
  a=a+accelerationX
  b=b+accelerationY
  fill(0,0,255);
  ellipse(a,b,20,20);
  
    }
  //        background (255);rect
  //        stroke (0);
   //       strokeWeight(4);
   //       noFill();
    //      ellipse(x,y,100,100);
    //      x=x+xspeed;
    //      y=y+yspeed;
     //     if (x>width)
    //    {xspeed = -xspeed;}
    //  if (x<0)
     //   {xspeed = -xspeed;}
        
   //     if (y>height)
   //     {yspeed = -yspeed;}
  //    if (y<0)
 //       {yspeed = -yspeed;}
  
