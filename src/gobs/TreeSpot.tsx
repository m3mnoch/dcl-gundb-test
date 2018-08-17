import { createElement, ISimplifiedNode } from "metaverse-api";
import { log } from "src/common/GameLogger";
import Gob from "src/common/Gob";
import { GameConfig } from "src/GameConfig";
import Tree from "src/gobs/Tree";

export default class TreeSpot extends Gob {
    constructor(name: string, color: string) {
        super(name, "TreeSpot");
        this.persistProperty("color", color);
        this.persistProperty("canSpawn", true);

        log("spawner", name + " created", this.getGobId(), this.getTemplate());

        GameConfig.theGame.eventSubscriber.on(this.getGobId() + "_click", () => {
            this.spawnTree();
        });
    }

    private spawnTree() {
        // NOTE:  example of "production ready" vs. "prototype" code requirements:
        // you can imagine this function instead kicking off a series of animations
        // 1) the tree grows
        // 2) the tree moves to a looping idle where it gently sways
        // 3) randomly, it swaps to a stronger breeze rolling through and leaves falling
        // 4) then, back to the idle loop
        // maybe seasons, sickness, harvesting, growing fruit, stages of growth, etc.
        // aka, these objects need to be more than just "static thing appears, skeletal/algorithmically animating on a loop"

        if (this.getPersistentProperty("canSpawn")) {
            console.log("spawning tree!!");

            const myTree: Tree = new Tree(this.getGobId() + "-tree");
            myTree.updateTranslation(this.getTranslation());
            myTree.persistProperty("heightScale", Math.random() * 0.8 + 0.2);
            this.persistProperty("canSpawn", false);

            GameConfig.theGame.addGobToScene(myTree);

            // i _hate_ this.  i want to put a simple state into the main scene
            // state.  i feel like it should be some part of the gob object.  like,
            // a `gobState` or something.  then, we can drop that into an array and
            // rebuild dynamic gobs from it client-side when another user logs in.
            GameConfig.theGame.setState({
                drawFrame: performance.now()
            });
        }
    }

    public onGobUpdate(frameTime: number) {
        // just in case there's anything we need to handle
        // when/if we turn on the global update loop.
    }

    onRender(): ISimplifiedNode {
        return (
            <entity>
                <box
                    id={this.getGobId()}
                    position={this.getTranslation()}
                    scale={{ x: 1, y: 0.01, z: 1 }}
                    color={this.getPersistentProperty("color")}
                />
            </entity>
        );
    }
}
