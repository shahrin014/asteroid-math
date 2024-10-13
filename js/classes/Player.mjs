import { Sprite } from "https://cdn.jsdelivr.net/npm/pixi.js@8.x/dist/pixi.min.mjs";

import { useCanMove } from "../composables/movement/useCanMove.mjs";
import { useCanApplyForces } from "../composables/movement/useCanApplyForces.mjs";
import { useCanControlUsingKeyboard } from "../composables/input/useCanControlUsingKeyboard.mjs";
import { useCanWrapPositionOnScreen } from "../composables/movement/useCanWrapPositionOnScreen.mjs";
import { useCanApplyControlsToForces } from "../composables/controls/useCanApplyControlsToForces.mjs";
import { useCanApplyControlsToMovement } from "../composables/controls/useCanApplyControlsToMovement.mjs";

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
      useCanMove(),
      // useCanApplyForces(sprite),
      useCanWrapPositionOnScreen(app, sprite),
      // useCanApplyControlsToForces(this),
      useCanApplyControlsToMovement(this),
      useCanControlUsingKeyboard()
    );
  }

  tick() {
    this.applyControls();
    // this.applyForces();
    this.move();
    this.wrapPositionOnScreen();
  }
}
