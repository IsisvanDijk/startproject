import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Projectile } from "./projectile";

export class Shield extends Actor {
    lives = 1

    constructor() {
        super({
            anchor: new Vector(0.5, 0.5),
            pos: new Vector(100, 0),
            width: 100,
            height: 100,
            radius: 600,
            scale: new Vector(0.2, 0.2),
        });
    }

    onInitialize() {
        console.log("Shield added");

        this.graphics.use(Resources.Shield.toSprite());

        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        if (event.other instanceof Projectile) {
            this.kill()
            event.other.kill()
        }
    }
}