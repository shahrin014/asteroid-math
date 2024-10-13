const outOfBoundsBuffer = {
  x: 40,
  y: 40,
};

export const useCanWrapPositionOnScreen = (app, sprite) => ({
  wrapPositionOnScreen() {
    if (this.body.position.x < 0 - outOfBoundsBuffer.x) {
      this.body.position.x = app.screen.width + outOfBoundsBuffer.x;
    }
    if (this.body.position.x > app.screen.width + outOfBoundsBuffer.x) {
      this.body.position.x = 0 - outOfBoundsBuffer.x;
    }
    if (this.body.position.y < 0 - outOfBoundsBuffer.y) {
      this.body.position.y = app.screen.height + outOfBoundsBuffer.y;
    }
    if (this.body.position.y > app.screen.height + outOfBoundsBuffer.y) {
      this.body.position.y = 0 - outOfBoundsBuffer.y;
    }
  },
});
