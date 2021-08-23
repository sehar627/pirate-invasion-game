class Cannon {
  constructor(x, y, width, height, angle) {
   
    this.width = width;
    this.height = height;
    this.angle = angle;
    var options={
      isStatic:true
    }

    this.body=Bodies.rectangle(x,y,width,height,options)
  }
  display() {
    
    if(keyIsDown(RIGHT_ARROW)){

      this.angle=this.angle+0.02
    }
    if(keyIsDown(LEFT_ARROW)){

      this.angle=this.angle-0.02
    }

   fill("#676e6a");
   push();

   translate(this.body.position.x,this.body.position.y);
   rotate(this.angle)
   
    rect(0,0, this.width, this.height);
    pop();

    arc(150,230,150,200,PI,TWO_PI)
    
  }
}
