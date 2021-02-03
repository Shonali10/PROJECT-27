class bob {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':7.8
      }
      this.body = Bodies.circle(x, y,25, options);
      // this.radius= radius;
          World.add(world, this.body);
    }
  
    display(){
      //       var pos =this.body.position;
      // var angle = this.body.angle;
      push();
      // translate(pos.x,pos.y);
      // rotate(angle);
      ellipseMode(CENTER);
  strokeWeight(2);
  stroke("black");    
      fill(254,0,255);
      // circle(this.x,this.y, this.r);
      ellipse(this.body.position.x,this.body.position.y,50,50);
      pop();

    }
  };