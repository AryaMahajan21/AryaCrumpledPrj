class Paper{ 
  constructor(x,y,width,height){
var option = { 
 //restitution:0.5, // restitution is not rqd as paper is not supposed to have elastic motion
 frictionAir:0.05,
 density:1.2 
}
this.body = Bodies.rectangle(x,y,width,height,option);
this.width = width;
this.height = height;
World.add(world,this.body);
} 
 display(){
var pos = this.body.position 
var angle = this.body.angle
 push() 
 translate(pos.x,pos.y) 
 rotate(angle) 
 ellipseMode(RADIUS)
  fill("pink") 
  ellipse(0,0,this.width,this.height) 
  pop() 
} 
}
