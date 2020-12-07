class Paper{
    constructor(x,y){
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0.5,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 20, options);
        this.radius = 20;
        World.add(world, this.body);
        }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            strokeWeight(3);
            fill(0, 128, 0);
            ellipse(0,0,20,20);
            pop();
        }
    }
