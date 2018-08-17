import { Vector3Component } from "metaverse-api";
import { GameConfig } from "src/GameConfig";

export default class Player {
  public username: string;
  public position: Vector3Component = { x: 0, y: 0, z: 0 };
  public rotation: Vector3Component = { x: 0, y: 0, z: 0 };

  constructor(name: string) {
    this.username = name;

    GameConfig.theGame.subscribeTo("rotationChanged", e => {
      this.rotation = e.rotation;
    });

    GameConfig.theGame.subscribeTo("positionChanged", e => {
      this.position = e.position;
    });
  }
}
