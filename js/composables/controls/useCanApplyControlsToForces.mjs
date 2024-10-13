import { Vector } from "../../classes/Vector.mjs";
import { VectorPhysics } from "../../classes/VectorPhysics.mjs";

export const useCanApplyControlsToForces = () => ({
  speed: 0,
  direction: 0,
  applyControls() {
    const engineThrust = 0.05;
    const spinThrust = 0.05;

    this.speed = 0;
    if (this.controls.up) {
      this.speed = engineThrust;
    }

    if (this.controls.down) {
      this.speed = -engineThrust;
    }

    if (this.controls.left) {
      this.direction += spinThrust;
    }

    if (this.controls.right) {
      this.direction -= spinThrust;
    }

    this.applyForcefromSpeedDirection(this.speed, this.direction)

    this.rotation = this.direction;
  },
});
