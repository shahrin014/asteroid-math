import {
  Body,
  Sphere,
} from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";
import { VectorPhysics } from "../../classes/VectorPhysics.mjs";

export const useCanMovePhysics = (world, sprite, options) => {
  const sphereShape = new Sphere(1);
  const body = new Body({
    position: new VectorPhysics(sprite.x, sprite.y),
    angularDamping: 0.1,
    ...options,
  });
  body.addShape(sphereShape);
  world.addBody(body);

  return {
    body,
    rotation: 0,
    applyForcefromSpeedDirection(speed, theta) {
      body.applyForce(
        VectorPhysics.fromSpeedDirection(speed, theta).scale(10000)
      );
    },

    applyTorque(x, y, z) {
      body.applyTorque(new VectorPhysics(x, y, z).scale(50));
    },

    applyAirDrag() {
      const dragCoefficient = 0.00001;
      const rotationalDragCoefficient = 0.7;

      const scaleLinearDrag = -dragCoefficient * body.velocity.lengthSquared()
      const scaleAngularDrag = -rotationalDragCoefficient * body.angularVelocity.lengthSquared()

      const linearDrag = body.velocity.clone().scale(scaleLinearDrag);
      body.applyForce(linearDrag);

      const angularDrag = body.angularVelocity.clone().scale(scaleAngularDrag);
      body.applyTorque(angularDrag)
    },

    move() {
      this.applyAirDrag();

      this.sprite.x = this.body.position.x;
      this.sprite.y = this.body.position.y;

      const euler = new VectorPhysics();

      this.body.quaternion.toEuler(euler);

      // this.rotation = this.direction;

      this.rotation = (Math.cos(euler.y) * euler.z) - euler.x;

      this.sprite.rotation = -this.rotation + Math.PI;
    },
  };
};
