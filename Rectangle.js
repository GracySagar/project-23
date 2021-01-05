class Rectangle{
    var options={
        restitution:1;
    }

    this.Body = Bodies.rectangle(400,700,100,10);
    World.add(world,this.Body);

    display(){
    var pos=this.body.rectangle;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.width);
    }
}