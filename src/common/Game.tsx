import { createElement, ScriptableScene } from "metaverse-api";
import Gob from "src/common/Gob";
import Player from "src/common/Player";
import Ground from "src/static/Ground";
import { gameMount } from "../GameStartup";

export class Game extends ScriptableScene<any, { tickFrame: number; drawFrame: number }> {
  public state = { tickFrame: 0, drawFrame: 0 };
  private sceneGobs: Gob[] = []; // TODO:  stick these in state and add pool support.
  private scenePlayers: Player[] = [];

  public addGobToScene = (gob: Gob): void => {
    this.sceneGobs.push(gob);
  };

  public addPlayerToScene = (player: Player): void => {
    this.scenePlayers.push(player);
  };

  public deleteGobFromScene = (gob: Gob): void => {
    const index = this.sceneGobs.indexOf(gob);
    if (index !== -1) {
      this.sceneGobs.splice(index, 1);
    }
  };

  public getPlayerFromSceneByName = (playerId: string): Player | null => {
    let returnPlayer: any;
    this.scenePlayers.forEach(function(entity: Player) {
      if (entity.username == playerId) {
        returnPlayer = entity;
      }
    });
    return returnPlayer;
  };

  public getGobFromSceneByName = (gobId: string): Gob | null => {
    let returnGob: any;
    this.sceneGobs.forEach(function(entity: Gob) {
      if (entity.getGobId() == gobId) {
        returnGob = entity;
      }
    });
    return returnGob;
  };

  public deleteGobs() {
    this.sceneGobs.map($ => $.expire());
  }

  public updateGobs() {
    var frameTime: number = performance.now();
    this.sceneGobs.map($ => $.onFrameUpdate(frameTime));
  }

  public renderGobs() {
    return this.sceneGobs.map($ => $.onRender()); // not to be confused with `render()`
  }

  public async sceneDidMount() {
    // handle any startup functions.
    if (gameMount) gameMount();

    this.setState({
      drawFrame: performance.now()
    });
  }

  public async render() {
    return (
      <scene>
        {this.renderGobs()}
        <Ground />
      </scene>
    );
  }
}
