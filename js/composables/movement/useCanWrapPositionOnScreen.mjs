const outOfBoundsBuffer = {
  x: 40,
  y: 40,
};

export const useCanWrapPositionOnScreen = (app, sprite) => ({
  wrapPositionOnScreen() {
    if (sprite.x < 0 - outOfBoundsBuffer.x) {
      sprite.x = app.screen.width + outOfBoundsBuffer.x;
    }
    if (sprite.x > app.screen.width + outOfBoundsBuffer.x) {
      sprite.x = 0 - outOfBoundsBuffer.x;
    }
    if (sprite.y < 0 - outOfBoundsBuffer.y) {
      sprite.y = app.screen.height + outOfBoundsBuffer.y;
    }
    if (sprite.y > app.screen.height + outOfBoundsBuffer.y) {
      sprite.y = 0 - outOfBoundsBuffer.y;
    }
  },
});
