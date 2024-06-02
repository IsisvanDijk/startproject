import { Scene } from "excalibur";
import { Background } from "./background";
import { Ship } from "./ship";
import { Comet } from "./comet";
import { Astroid } from "./astroid";
import { UI } from "./UI"
import { Game } from "./game";

export class Level extends Scene {

    /**
     * 
     * @param {Game} engine 
     */

    onInitialize(engine) {
        this.score = 0;
    }

    onActivate() {
        console.log("onActivate Level");
        this.background = new Background();
        this.add(this.background);

        this.ui = new UI()
        this.add(this.ui)

        this.ship = new Ship();
        this.add(this.ship);

        this.comet = new Comet();
        this.add(this.comet)

        for (let i = 0; i < 10; i++) {
            this.astroid = new Astroid();
            this.add(this.astroid);
        }

        this.score = 0;
    }

    onDeactivate() {
        console.log("onDeactivate Level");
        console.log(this.actors);

        this.actors.forEach(actor => actor.kill());
    }

    powerUpScore(score) {
        this.score += score;
        console.log(this.score)
    }

    onPostUpdate(engine) {
        if (this.score === 10) {
            engine.goToScene('YouWin')
        }
    }

}

