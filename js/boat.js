class Boat{
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
      };
      this.width = width;
      this.height = height;
     // this.position=position
      //this.boatposition=boatposition
      this.image=loadImage("assets/boat.png")
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("brown");
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
    remove(index) {
      
     
        Matter.World.remove(world, boats[index].body);
       
    }
  }
  