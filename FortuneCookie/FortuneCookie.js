/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FortuneCookie extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "fortune cookie",
        "./FortuneCookie/costumes/fortune cookie.png",
        { x: 60, y: 62 }
      )
    ];

    this.sounds = [new Sound("pop", "./FortuneCookie/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 300;
    this.goto(22, -1);
    yield* this.sayAndWait(
      "the first fortune you get will be the most accurate",
      3
    );
  }

  *whenthisspriteclicked() {
    this.stage.vars.fortune = this.stage.vars.fortunes[this.random(1, 18) - 1];
    yield* this.sayAndWait(this.stage.vars.fortune, 1.5);
  }
}
