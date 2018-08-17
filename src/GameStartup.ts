import { randomInclusiveInteger } from "src/common/HelperFunctions";
import Player from "src/common/Player";
import { GameConfig } from "src/GameConfig";
import TreeSpot from "./gobs/TreeSpot";

export const gameMount = () => {
  // start up the player tracking so we can synchronously get the player position.
  // i really, really dislike this.  multiplayer, man.  multiplayer.
  const player: Player = new Player("m3mnoch");
  GameConfig.theGame.addPlayerToScene(player);

  // add the ground
  let treeSpot;
  for (let i = 0; i < 5; i++) {
    treeSpot = new TreeSpot("tree-spot-" + i, "#A0522D");

    // NOTE:  example of "production ready" vs. "prototype" code requirements:
    // make sure we're not re-using existing spots when we lay these out
    // make sure there's not a person or other scenery already there
    // basically, write a bunch of code to "make sure we're spawning in a valid spot"
    // don't forget the ui that displays the cooldown timer
    // oh, and the ui that gives the options of "did you really mean to click here and use your limited resources to build this?"
    const tX: number = randomInclusiveInteger(1, 9);
    const tZ: number = randomInclusiveInteger(1, 9);
    treeSpot.updateTranslation({ x: tX, y: 0, z: tZ });

    GameConfig.theGame.addGobToScene(treeSpot);
  }

  // NOTE:  if lots of the objects we've got in the scene are
  // dynamic npc/ai/gob things rather than just scenery and a
  // dynamic thing or two, it'll be more beneficial to drop in
  // a main loop than have a bajillion little loop callbacks.
  //
  // const aiLoop = setInterval(() => {
  //   // ideally, we'd do this according to the
  //   // game state in the state machine.
  //   GameConfig.theGame.updateGobs();
  //
  //   // we can update all the players too.
  //   // if we need it, that is.
  //
  //   // push the state changes
  //   GameConfig.theGame.setState({
  //     drawFrame: performance.now()
  //   });
  // }, GameConfig.drawFrameMs);
};
