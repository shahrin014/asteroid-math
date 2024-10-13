export const useCanApplyForces = (sprite) => ({
  appliedForce: {
    speed: 0,
    direction: 0,
  },

  applyForces() {
    addMomentum(this, this.appliedForce);

    addMomentum(this, {
      speed: this.speed * 0.003,
      direction: this.direction + Math.PI,
    });

    this.rotation = this.appliedForce.direction;
  },
});

const addMomentum = (momentum, force) => {
  const vx = momentum.speed * Math.cos(momentum.direction);
  const vy = momentum.speed * Math.sin(momentum.direction);

  const fx = force.speed * Math.cos(force.direction);
  const fy = force.speed * Math.sin(force.direction);

  const mass = 1; // assume mass of 1 for simplicity
  const ax = fx / mass;
  const ay = fy / mass;

  const newVx = vx + ax;
  const newVy = vy + ay;
  momentum.speed = Math.sqrt(newVx ** 2 + newVy ** 2);
  momentum.direction = Math.atan2(newVy, newVx);
};
