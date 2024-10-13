import { World } from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";

export const usePhysicsWorld = () => {
  const world = new World();
  return {
    world,
    setup() {
      this.ticker.add((time) => {
        world.step(1 / 60);
      });
    },
  };
};
