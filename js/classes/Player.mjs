import { Sprite } from "https://cdn.jsdelivr.net/npm/pixi.js@8.x/dist/pixi.min.mjs";

import { useCanMove } from "../composables/movement/useCanMove.mjs";
import { useCanMovePhysics } from "../composables/movement/useCanMovePhysics.mjs";
import { useCanControlUsingKeyboard } from "../composables/input/useCanControlUsingKeyboard.mjs";
import { useCanWrapPositionOnScreen } from "../composables/movement/useCanWrapPositionOnScreen.mjs";
import { useCanApplyControlsToForces } from "../composables/controls/useCanApplyControlsToForces.mjs";
import { useCanApplyControlsToShoot } from "../composables/controls/useCanApplyControlsToShoot.mjs";

export class Player {
  constructor(app) {
    const sprite = Sprite.from("spaceship");

    sprite.x = 0.5 * app.screen.width;
    sprite.y = 0.5 * app.screen.height;
    sprite.rotation = Math.PI * 1;

    sprite.scale.x = 0.7;
    sprite.scale.y = 0.7;
    // Set anchor to the middle
    sprite.anchor.set(0.5);
    app.stage.addChild(sprite);
    this.app = app;
    this.sprite = sprite;

    Object.assign(
      this,
      useCanMovePhysics(this.app.world, this.sprite, {
        mass: 1,
      }),
      useCanWrapPositionOnScreen(this.app, this.sprite),
      useCanApplyControlsToForces(this),
      useCanControlUsingKeyboard(),
      useCanApplyControlsToShoot()
    );
  }

  tick(delta) {
    this.applyControlsToForces();
    this.applyControlsToShoot(delta);
    this.move();
    this.wrapPositionOnScreen();
  }
}
