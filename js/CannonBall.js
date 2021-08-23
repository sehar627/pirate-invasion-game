class CannonBall {
    constructor(x, y,radius) {
      var options = {
       isStatic:true
      };
      this.radius=radius
  //create circular body
  this.body=Bodies.circle(x,y,radius,options)
     
  //add Image
  this.image=loadImage("assets/cannonball.png")
      
      World.add(world, this.body);
      this.trajectory=[]
    }
  //shoot function
  shoot(){
    Matter.Body.setStatic(this.body,false)
  Matter.Body.setVelocity(this.body,{x:8,y:-8})
  }
  
    display() {
     
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      //image function
     image(this.image,0,0,this.radius,this.radius)
      pop();


      if (this.body.velocity.x > 3 && this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
      }
      for (var i = 0; i < this.trajectory.length; i++) {
        image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
      }
  
      }
    }