class Particle{
  constructor(x, y, radius) {
      var options = {
          restitution:0.8,
          density:1,
          friction:1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;

      var colours = ["blue", "green", "yellow", "black"];
      var randomColour = Math.floor(Math.random() * colours.length);
      fill(colours[randomColour]);

      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle)
      ellipseMode(CENTER);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
      pop();
    }
}