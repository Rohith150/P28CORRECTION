class Stone{
    constructor(x,y,width,height){
        var options = {
            restitution: 0,
            friction: 1,
            denstiy: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;     
        this.image = loadImage('Images/stone.png')
        World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height)
    }
}