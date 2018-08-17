import Gob from "src/common/Gob";
import { randomInclusiveInteger } from "src/common/HelperFunctions";
import { NetworkManager } from "src/common/NetworkManager";
import Player from "src/common/Player";
import { GameConfig } from "src/GameConfig";
import Tree from "src/gobs/Tree";
import TreeSpot from "./gobs/TreeSpot";

export const gameMount = () => {
    // start up the player tracking so we can synchronously get the player position.
    // i really, really dislike this.  multiplayer, man.  multiplayer.
    const player: Player = new Player("m3mnoch");
    GameConfig.theGame.addPlayerToScene(player);

    // see if we've already got data.
    let gobpersistence: any = NetworkManager.gun.get("gobpersistence");
    console.log(gobpersistence);

    // NetworkManager.gun
    //     .get("gobpersistence")
    //     .map()
    //     .once(function(gobdata: any) {
    //         console.log("gobdata: ", gobdata);
    //     });

    // NetworkManager.gun.get("scene/gun-persist/gobs").put({ hello: "world" });

    NetworkManager.gun.get(GameConfig.persistenceBucket, function(data: any) {
        if (data.err) {
            //server.log(error);
            console.log("bucket error:", data.err);
        } else if (!data.put) {
            // not found
            console.log("data not found");
            createTreeSpots();
        } else {
            // data!
            console.log("pre-existing data");
            repopulateGobs();
            //createTreeSpots();
        }
    });

    const createTreeSpots = () => {
        // add the ground
        let treeSpot;
        for (let i = 0; i < 5; i++) {
            treeSpot = new TreeSpot("tree-spot-" + i, "#A0522D");
            const tX: number = randomInclusiveInteger(1, 9);
            const tZ: number = randomInclusiveInteger(1, 9);
            treeSpot.updateTranslation({ x: tX, y: 0, z: tZ });

            GameConfig.theGame.addGobToScene(treeSpot);
        }
    };

    const repopulateGobs = () => {
        let gob: Gob | null;
        NetworkManager.gun
            .get(GameConfig.persistenceBucket)
            .map()
            .once(function(gobData: any, id: string) {
                NetworkManager.gun.get(GameConfig.persistenceBucket).unset(gobData);

                // we're not erasing anything.
                console.log("gob type:", gobData.type);
                console.log("translation:", gobData.translation);

                if (gobData.type == "treespot") gob = new TreeSpot(gobData.name, "#A0522D");
                if (gobData.type == "tree") gob = new Tree(gobData.name);

                if (gob) {
                    gob.updateTranslation(JSON.parse(gobData.translation));
                    gob.updateRotation(JSON.parse(gobData.rotation));
                    gob.updateAllPersistence(JSON.parse(gobData.persistence));

                    console.log(gob.getTranslation());
                    gob.clearChanges();

                    GameConfig.theGame.addGobToScene(gob);
                }
            });
    };

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
    //

    // let's do the animation update loop.
    const timer = setInterval(() => {
        GameConfig.theGame.updateGobs();

        // triggering diff/patch the silly way.
        GameConfig.theGame.setState({
            drawFrame: performance.now()
        });
    }, GameConfig.drawFrameMs);

    // the network update loop.
    const networkLoop = setInterval(() => {
        // ideally, we'd do this according to the
        // game state in the state machine.
        NetworkManager.updateFrame(performance.now());
    }, GameConfig.networkFrameMs);
};
