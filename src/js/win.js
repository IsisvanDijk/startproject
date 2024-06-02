import { Actor, Sprite, Vector } from "excalibur"
import { Resources } from "./resources"

export class Win extends Actor {
    sprite

    onInitialize(engine) {

        this.sprite = new Sprite({
            image: Resources.Win,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
        this.scale = new Vector(1500 / 1440, 900 / 794)

        console.log(Resources.Win.width)
        console.log(Resources.Win.height)

    }
}