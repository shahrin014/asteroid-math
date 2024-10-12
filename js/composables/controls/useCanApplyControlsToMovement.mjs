export const useCanApplyControlsToMovement = (entity) => ({
  applyControls() {
    const engineThrust = 0.03;
    const spinThrust = 0.05;

    if (entity.controls.up) {
      entity.speed += engineThrust;
    }

    if (entity.controls.down) {
      entity.speed -= engineThrust;
    }

    if (entity.controls.left) {
      entity.direction += spinThrust;
    }

    if (entity.controls.right) {
      entity.direction -= spinThrust;
    }
    entity.rotation = entity.direction;
  },
});
