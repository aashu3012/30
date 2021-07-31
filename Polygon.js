class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.poly=Bodies.circle(x,y,40,options);
        this.image = loadImage("polygon.png");
        World.add(world, this.poly);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image,this.poly.position.x,this.poly.position.y,40,40);
        pop();
      }
}