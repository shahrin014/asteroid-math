import { Body } from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";

export const useCanHavePhysicsForces = (entity, ...args) => {
  const body = new Body();
  world.addBody(body);
  return {
    body,
    applyForces() {
      // TODO
    },
  };
};
