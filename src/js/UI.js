import { Actor, Color, Font, Label, ScreenElement, Vector } from "excalibur";

export class UI extends ScreenElement {

    healthbar;
    score = 0;
    scoreLabel;

    onInitialize(engine) {

        this.score = 0;
        this.scoreLabel;

        this.scoreLabel = new Label({
            text: `Your score: ${this.score}`,
            pos: new Vector(25, 25),
            font: new Font({ color: Color.Azure, size: 40 }),

        });
        this.addChild(this.scoreLabel)

        let healthBackground = new Actor({ x: 30, y: 75, color: Color.White, width: 200, height: 40 })
        healthBackground.graphics.anchor = Vector.Zero
        this.addChild(healthBackground)

        this.healthbar = new Actor({ x: 30, y: 80, color: Color.Azure, width: 200, height: 30 })
        this.healthbar.graphics.anchor = Vector.Zero
        this.addChild(this.healthbar)

    }

    updateScore(score) {
        this.score += score;
        this.scoreLabel.text = `Your score: ${this.score}`
    }

    updateHealth(health) {
        this.healthbar.scale = new Vector(health, 1)
    }
}