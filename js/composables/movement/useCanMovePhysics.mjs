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

    move() {
      this.sprite.x = this.body.position.x;
      this.sprite.y = this.body.position.y;

      const euler = new VectorPhysics();

      this.body.quaternion.toEuler(euler);

      // this.rotation = this.direction;
      console.log(this.body.quaternion);
      this.rotation = this.body.quaternion.z;
      this.sprite.rotation = -this.rotation + Math.PI;
    },
  };
};
