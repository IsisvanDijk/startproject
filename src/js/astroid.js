import { Vector } from "excalibur";
import { Projectile } from "./projectile";
import { Resources } from "./resources";
import { Bullet } from "./bullet";

export class Astroid extends Projectile {
    constructor() {
        super();
        this.graphics.use(Resources.Astroid.toSprite());
        this.vel = new Vector(-300, 0);
        this.pos = new Vector(
            Math.random() * 4000 + 1000,
            Math.random() * 900
        );

        this.on('collisionstart', (event) => { this.hitSomething(event) });
    }

    hitSomething(event) {
        if (event.other instanceof Bullet) {
            this.kill()
            //@ts-ignore
            this.scene?.engine.updateScore(1)
            event.other.kill()
        }
    }
}
