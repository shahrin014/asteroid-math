import { Vector } from "../../classes/Vector.mjs";

export const useCanMove = () => ({
  rotation: 0,

  movement: new Vector(),
  // _move() {
  //   const dx = -Math.sin(this.direction) * this.speed;
  //   const dy = -Math.cos(this.direction) * this.speed;

  //   this.sprite.x += dx;
  //   this.sprite.y += dy;

  //   this.sprite.rotation = -this.rotation + Math.PI;

  // },

  move() {
    this.sprite.x += this.movement.x;
    this.sprite.y += this.movement.y;

    this.sprite.rotation = -this.rotation + Math.PI;

    this.movement.set(0, 0, 0);
  },
});
