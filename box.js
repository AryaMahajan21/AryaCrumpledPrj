class Box{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.2,
            friction: 2.0, // added friction
            density: 2 // added density

        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("white")
        rect(pos.x,pos.y,this.width,this.height)
        
    }
}