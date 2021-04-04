import { IScene, ILevel } from "./interfaces";
import { Level } from "./Levels";

export class Scene implements IScene {
    progress: boolean;
    level: ILevel;

    constructor() {
        this.progress = true;
        this.level = new Level();
    }

    nextStep(): Promise<void> {
        if (this.level.levelOne()/* && this.level.levelTwo() && this.level.levelThree()*/) {
            this.progress = false;
            return Promise.resolve();
        } else {
            return this.level.nextStep();
        }
    }
}
