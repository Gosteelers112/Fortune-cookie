import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import FortuneCookie from "./FortuneCookie/FortuneCookie.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  FortuneCookie: new FortuneCookie({
    x: 22,
    y: -1,
    direction: 90,
    costumeNumber: 1,
    size: 300,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
