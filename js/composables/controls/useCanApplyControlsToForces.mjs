export const useCanApplyControlsToForces = (entity) => ({
  applyControls() {
    const engineThrust = 0.05;
    const spinThrust = 0.05;

    entity.appliedForce.speed = 0;
    if (entity.controls.up) {
      entity.appliedForce.speed = engineThrust;
    }

    if (entity.controls.down) {
      entity.appliedForce.speed = -engineThrust;
    }

    if (entity.controls.left) {
      entity.appliedForce.direction += spinThrust;
    }

    if (entity.controls.right) {
      entity.appliedForce.direction -= spinThrust;
    }
  },
});
