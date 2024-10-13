import {
  Body,
  Sphere,
} from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";
import { VectorPhysics } from "../../classes/VectorPhysics.mjs";

export const useCanMovePhysics = (world, sprite, options) => {
  const sphereShape = new Sphere(1);
  const body = new Body({
    position: new VectorPhysics(sprite.x, sprite.y),
    ...options,
  });
  body.addShape(sphereShape);
  world.addBody(body);

  return {
    body,
    rotation: 0,
    applyForcefromSpeedDirection(speed, direction) {
      body.applyForce(
        VectorPhysics.fromSpeedDirection(speed * 10000, direction)
      );
    },

    move() {
      this.sprite.x = this.body.position.x;
      this.sprite.y = this.body.position.y;

      this.sprite.rotation = -this.rotation + Math.PI;
    },
  };
};
