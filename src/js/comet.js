import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Bullet } from "./bullet";
import { Projectile } from "./projectile";

export class Comet extends Projectile {
    constructor() {
        super();
        console.log("Big comet created")
        this.graphics.use(Resources.Comet.toSprite());
        this.pos = new Vector(1440, 0);
        this.vel = new Vector(-325, 200);

        this.lives = 3

        this.on('collisionstart', (event) => { this.hitSomething(event); });
    }


    hitSomething(event) {
        if (event.other instanceof Bullet) {
            this.lives--
            if (this.lives === 0) {
                this.kill()
                //@ts-ignore
                this.scene?.engine.updateScore(3)
            }
            event.other.kill()
        }
    }
}

