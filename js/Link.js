class Link {
    constructor(bodyA, bodyB) {
      var lastlink = bodyA.body.bodies.length - 2;
      this.link = Constraint.create({
        bodyA: bodyA.body.bodies[lastlink],
        pointA: { x: 0, y: 0 },
        bodyB: bodyB.body,
        pointB: { x: 0, y: 0 },
        length: 9,
        stiffness: 1
      });
  
      World.add(world, this.link);
    }
  }