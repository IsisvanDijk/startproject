import { Color, Font, Label, Scene, Vector } from "excalibur";
import { Loss } from "./loss";

export class YouLose extends Scene {

    onInitialize(engine) {

    }

    onActivate() {
        this.lose = new Loss();
        this.add(this.lose);


        this.lossLabel = new Label({
            text: `You have LOST!`,
            pos: new Vector(550, 250),
            font: new Font({ color: Color.Magenta, size: 40 })
        });
        this.add(this.lossLabel)

        this.startOver = new Label({
            text: `Start over!`,
            pos: new Vector(600, 650),
            font: new Font({ color: Color.Magenta, size: 40 })
        })

        this.add(this.startOver)
        this.startOver.on('pointerdown', () => {
            this.engine.goToScene('level')
        });
    }
}