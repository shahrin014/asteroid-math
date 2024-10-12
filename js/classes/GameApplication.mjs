import { Application } from "https://cdn.jsdelivr.net/npm/pixi.js@8.x/dist/pixi.min.mjs";

import { usePhysicsWorld } from "../composables/world/usePhysicsWorld.mjs";
export class GameApplication extends Application {
  constructor() {
    super();
    Object.assign(this, usePhysicsWorld());
  }
}
