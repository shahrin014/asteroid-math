import { Sprite } from "https://cdn.jsdelivr.net/npm/pixi.js@8.x/dist/pixi.min.mjs";

import { useCanMove } from "../composables/movement/useCanMove.mjs";
import { useCanHaveForces } from "../composables/movement/useCanHaveForces.mjs";
import { useCanControlUsingKeyboard } from "../composables/input/useCanControlUsingKeyboard.mjs";
import { useCanWrapPositionOnScreen } from "../composables/movement/useCanWrapPositionOnScreen.mjs";
import { useCanApplyControlsToForces } from "../composables/controls/useCanApplyControlsToForces.mjs";

export class Player {
  constructor(app) {
    const sprite = Sprite.from("spaceship");

    sprite.x = 0.5 * app.screen.width;
    sprite.y = 0.5 * app.screen.height;
    sprite.rotation = Math.PI * 1;
    sprite.scale = 0.7;

    // Set anchor to the middle
    sprite.anchor.set(0.5);
    app.stage.addChild(sprite);
    this.app = app;
    this.sprite = sprite;

    Object.assign(
      this,
      useCanMove(sprite),
      useCanHaveForces(sprite),
      useCanWrapPositionOnScreen(app, sprite),
      useCanApplyControlsToForces(this),
      useCanControlUsingKeyboard(this)
    );
  }

  tick() {
    this.applyControls();
    this.applyForces();
    this.move();
    this.wrapPositionOnScreen();
  }
}
