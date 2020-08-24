class Mango{
    constructor(x, y, radius){
       var options = {
           isStatic: true,
           restitution: 0,
           friction: 1
       } 
       this.body = Bodies.circle(x,y,radius,options);
       this.x = x;
       this.y = y;
       this.radius = radius;
       this.image = loadImage('Images/mango.png');
       World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.radius);
    }
}