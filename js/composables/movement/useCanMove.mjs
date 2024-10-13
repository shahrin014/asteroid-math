import { Vector } from "../../classes/Vector.mjs";

export const useCanMove = () => ({
  rotation: 0,

  movement: new Vector(),

  applyForcefromSpeedDirection(speed, direction) {
    this.movement = this.movement.vadd(
      Vector.fromSpeedDirection(speed, direction)
    );
  },

  move() {
    this.sprite.x += this.movement.x;
    this.sprite.y += this.movement.y;

    this.sprite.rotation = -this.rotation + Math.PI;
  },
});
