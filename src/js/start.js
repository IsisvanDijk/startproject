import { Actor, Sprite, Vector } from "excalibur"
import { Resources } from "./resources"

export class Start extends Actor {
    sprite

    onInitialize(engine) {

        this.sprite = new Sprite({
            image: Resources.Start,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
        this.scale = new Vector(1440 / 785, 900 / 471)

        console.log(Resources.Start.width)
        console.log(Resources.Start.height)

    }
}