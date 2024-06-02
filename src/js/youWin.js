import { Color, Font, Label, Scene, Vector } from "excalibur";
import { Win } from "./win";

export class YouWin extends Scene {

    onInitialize(engine) {
    }

    onActivate() {

        this.win = new Win();
        this.add(this.win);

        this.winLabel = new Label({
            text: `You have won!`,
            pos: new Vector(550, 150),
            font: new Font({ color: Color.ExcaliburBlue, size: 40 })
        });
        this.add(this.winLabel)

        this.startOver = new Label({
            text: `Start over!`,
            pos: new Vector(600, 750),
            font: new Font({ color: Color.Rose, size: 40 })
        })
        this.add(this.startOver)
        this.startOver.on('pointerdown', () => {
            this.engine.goToScene('level')
        });
    }
}