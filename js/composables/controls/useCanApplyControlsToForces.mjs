import { Vector } from "../../classes/Vector.mjs";
import { VectorPhysics } from "../../classes/VectorPhysics.mjs";

export const useCanApplyControlsToForces = () => ({
  direction: 0,
  applyControlsToForces() {
    const engineThrust = 0.05;
    const spinThrust = 0.05;

    const thrust = this.controls.up
      ? engineThrust
      : this.controls.down
        ? -engineThrust
        : 0;

    if (this.controls.left) {
      this.direction += spinThrust;
    }

    if (this.controls.right) {
      this.direction -= spinThrust;
    }

    const torque = this.controls.left
      ? spinThrust
      : this.controls.right
        ? -spinThrust
        : 0;

    this.applyForcefromSpeedDirection(thrust, this.rotation);
    if (torque) {
      this.applyTorque(0, 0, torque);
    }
  },
});
