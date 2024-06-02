import { Actor, Keys, Vector } from "excalibur";
import { Resources } from "./resources";
import { Bullet } from "./bullet";
import { Projectile } from "./projectile";
import { Shield } from "./shield";

export class Ship extends Actor {

    lives = 3

    constructor() {
        super({
            anchor: new Vector(0.5, 0.5),
            pos: new Vector(200, 200),
            width: 100,
            height: 100,
            radius: 80,

        });
    }

    onInitialize() {
        console.log("Ship created");

        this.graphics.use(Resources.Ship.toSprite());

        this.pos = new Vector(
            200,
            450
        );

        this.vel = new Vector(
            0,
            0
        );

        this.lives = 3

        this.addShield()

        this.on('collisionstart', (event) => this.hitSomething(event));
        this.on("exitviewport", (event) => this.resetPosition(event));

    }

    resetPosition(event) {
        this.pos = new Vector(200, 450)
        this.removeLife();
    }

    addShield() {
        const shield = new Shield();
        this.addChild(shield)
    }

    removeLife() {
        this.lives--

        //@ts-ignore
        this.scene?.engine.updateHealth(this.lives / 3)
    }

    hitSomething(event) {
        if (event.other instanceof Projectile) {
            this.pos = new Vector(200, 450)
            this.removeLife();
        }
    }



    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        if (kb.isHeld(Keys.W) || kb.isHeld(Keys.Up)) {
            yspeed = -300
        }
        if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
            yspeed = 300
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 300
        }
        if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
            xspeed = -300
        }

        this.vel = new Vector(xspeed, yspeed)

        if (kb.wasPressed(Keys.Space)) {
            const bullet = new Bullet(this.pos);
            engine.add(bullet)
        }
    }

    onPostUpdate(engine) {
        if (this.lives === 0) {
            this.kill();
            engine.goToScene('youLose')
        }
    }
}
