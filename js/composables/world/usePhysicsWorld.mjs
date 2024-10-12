import {
  World,
  Body,
  Sphere,
  Vec3,
} from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";

export const usePhysicsWorld = () => ({
  world: new World(),
});
