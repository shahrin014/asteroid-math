import { Sprite } from "https://cdn.jsdelivr.net/npm/pixi.js@8.x/dist/pixi.min.mjs";

export class InfiniteBackground {
    constructor(app) {

        this.app = app
        const spriteAliases = Array.from({ length: 5 }, (_, i) => `background${i + 1}`);
        const spriteRotation = [0, 0.5, 1, 1.5, 0]


        const getScaleFactor = sprite => Math.max(
            app.screen.height / sprite.height,
            app.screen.width / sprite.width
        )

        this.sprites = spriteAliases.map((spriteAlias, index) => {
            const sprite = Sprite.from(spriteAlias);

            const scaleFactor = getScaleFactor(sprite)

            sprite.width = sprite.width * scaleFactor
            sprite.height = sprite.height * scaleFactor

            sprite.x = 0.5 * app.screen.width;
            sprite.y = 0.5 * app.screen.height - (sprite.height * index);
            sprite.anchor.set(0.5);
            sprite.rotation = Math.PI * spriteRotation[index]
            app.stage.addChild(sprite);
            return sprite;
        });
    }
    tick() {
        const scrollSpeed = 0.5;
        this.sprites.forEach(sprite => {
            sprite.y += scrollSpeed;
        });

        // Last background reached. Reset Y coordinates.
        if (this.sprites[this.sprites.length - 1].y > (0.5 * this.app.screen.height)) {
            this.sprites.forEach((sprite, index) => {
                sprite.y = 0.5 * this.app.screen.height - (sprite.height * index);
            })
        }
    }
}