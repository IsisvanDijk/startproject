import { Color, Font, Label, Scene, Vector } from "excalibur";
import { Start } from "./start";

export class StartGame extends Scene {

    onInitialize(engine) {

    }

    onActivate() {

        this.start = new Start();
        this.add(this.start);

        this.startGame = new Label({
            text: `Play!`,
            pos: new Vector(620, 350),
            font: new Font({ color: Color.Rose, size: 100 })
        })

        this.add(this.startGame)
        this.startGame.on('pointerdown', () => {
            this.engine.goToScene('level')
        });
    }
}