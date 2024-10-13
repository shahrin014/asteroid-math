import { Assets } from "https://cdn.jsdelivr.net/npm/pixi.js@8.x/dist/pixi.min.mjs";

import { GameApplication } from "./classes/GameApplication.mjs";
import { Player } from "./classes/Player.mjs";

let app = new GameApplication();

(async () => {
  await setup();
  await preload();
  const player = new Player(app);

  app.setup();
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
