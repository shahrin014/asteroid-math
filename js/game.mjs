import {
  Application,
  Assets,
} from "https://cdn.jsdelivr.net/npm/pixi.js@8.x/dist/pixi.min.mjs";

import { createPlayer } from "./classes/Player.mjs";

let app = new Application();

(async () => {
  await setup();
  await preload();
  const player = createPlayer(app);

  app.ticker.add((time) => {
    player.tick(time.deltaTime);
  });
})();

async function setup() {
  await app.init({ background: "#222", resizeTo: window });
  document.body.appendChild(app.canvas);
}

async function preload() {
  const assets = [
    {
      alias: "spaceship",
      src: "assets/ship/spaceShips_001.png",
    },
  ];
  await Assets.load(assets);
}
