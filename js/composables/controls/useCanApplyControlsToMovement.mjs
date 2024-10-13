export const useCanApplyControlsToMovement = () => ({
  speed: 0,
  direction: 0,
  applyControls() {
    const engineThrust = 0.03;
    const spinThrust = 0.05;

    if (this.controls.up) {
      this.speed += engineThrust;
    }

    if (this.controls.down) {
      this.speed -= engineThrust;
    }

    if (this.controls.left) {
      this.direction += spinThrust;
    }

    if (this.controls.right) {
      this.direction -= spinThrust;
    }

    this.rotation = this.direction;
    this.movement.set(0, 0, 0).addSpeedDirection(this.speed, this.direction);
  },
});
