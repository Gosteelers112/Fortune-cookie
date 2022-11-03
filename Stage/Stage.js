/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.fortune = "you have no future";
    this.vars.fortunePicker = 0;
    this.vars.fortunes = [
      "you will die soon",
      "you will lose all your friends",
      "you will win the lottery",
      "you will break the law",
      "???",
      "nobody knows your fortune",
      "you will eat  a big meal soon.",
      "???",
      "???",
      "you will have to make a big decision soon",
      "you will be embarrassed in front of your crush",
      "you have no future",
      "you will go to heaven",
      "you will go to hell",
      "you will breathe in the next minute",
      "you will breathe in the next minute",
      "you will not be happy with your son",
      "you will not be happy with your son"
    ];
  }
}
