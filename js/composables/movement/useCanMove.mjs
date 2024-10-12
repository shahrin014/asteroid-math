export const useCanMove = (sprite) => ({
  speed: 0,
  direction: 0,
  rotation: 0,
  move() {
    sprite.x += -Math.sin(this.direction) * this.speed;
    sprite.y += -Math.cos(this.direction) * this.speed;

    sprite.rotation = -this.rotation + Math.PI;
  },
});
