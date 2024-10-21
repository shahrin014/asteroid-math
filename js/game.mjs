import { Assets } from "https://cdn.jsdelivr.net/npm/pixi.js@8.x/dist/pixi.min.mjs";

import { GameApplication } from "./classes/GameApplication.mjs";
import { InfiniteBackground } from "./classes/InfiniteBackground.mjs";
import { Player } from "./classes/Player.mjs";

let app = new GameApplication();

(async () => {
  await setup();
  await preload();
  const background = new InfiniteBackground(app)
  const player = new Player(app);

  app.setup();
  app.ticker.add((time) => {
    background.tick(time.deltaTime);
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
    }, {
      alias: "background1",
      src: "assets/backgrounds/corona_ft.png",
    }, {
      alias: "background2",
      src: "assets/backgrounds/corona_up.png",
    }, {
      alias: "background3",
      src: "assets/backgrounds/corona_bk.png",
    }, {
      alias: "background4",
      src: "assets/backgrounds/corona_dn.png",
    }, {
      alias: "background5",
      src: "assets/backgrounds/corona_ft.png",
    }, {
      alias: "laser",
      src: "assets/projectiles/laser.png",
    },
  ];
  await Assets.load(assets);
}
