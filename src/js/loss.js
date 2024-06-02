import { Actor, Sprite, Vector } from "excalibur"
import { Resources } from "./resources"

export class Loss extends Actor {
    sprite

    onInitialize(engine) {

        this.sprite = new Sprite({
            image: Resources.Loss,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
        this.scale = new Vector(1440 / 640, 900 / 360)

        console.log(Resources.Loss.width)
        console.log(Resources.Loss.height)

    }
}