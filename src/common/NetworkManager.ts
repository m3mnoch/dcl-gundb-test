/*

batches asynchronous changes, serializes the xml attribute
changes only once for the entityController from gob properties.

*/

import Gun from "Gun"; // this works.  ignore the little red squiggly.
import { log } from "src/common/GameLogger";
import Gob from "src/common/Gob";
import { GameConfig } from "src/GameConfig";

export namespace NetworkManager {
    export const updateFrame = (frameTime: number) => {
        // check for dirty gobs, update the new entity properties
        let gobs: Gob[] = GameConfig.theGame.getSceneGobs();
        gobs.forEach(gob => {
            if (gob.getIsChanged()) {
                var gobName: string = gob.getGobId();
                log("network", "gob changed: " + gobName);

                var gobdata = gun.get(gobName).put({
                    name: gobName,
                    type: gob.getTemplate(),
                    translation: JSON.stringify(gob.getTranslation()),
                    rotation: JSON.stringify(gob.getRotation()),
                    persistence: JSON.stringify(gob.getAllPersistence())
                });
                gun.get(GameConfig.persistenceBucket).set(gobdata);

                gob.clearChanges();
            }
        });
    };

    const rel_ = Gun.val.link._; // '#'
    const node_ = Gun.node._; // '_'

    Gun.chain.unset = function(node: any) {
        if (this && node && node[node_] && node[node_].put && node[node_].put[node_] && node[node_].put[node_][rel_])
            this.put({ [node[node_].put[node_][rel_]]: null });
        return this;
    };

    export const gun = new Gun("https://dcl-gun.herokuapp.com/gun");

    // Create an interface for the `greetings`
    // key, storing it in a variable.
    gun.get(GameConfig.persistenceBucket).on(function(data: any) {
        let gobs: Gob[] = GameConfig.theGame.getSceneGobs();
        gobs.forEach(gob => {
            if (gob.getGobId() == data.name) {
                gob.updateAllPersistence(data.persistence);
                gob.updateTranslation(data.translation);
                gob.updateRotation(data.rotation);
                gob.clearChanges();
            }
        });
    });
}
