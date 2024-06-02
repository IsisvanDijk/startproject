import '../css/style.css'
import { DisplayMode, Engine } from "excalibur"
import { ResourceLoader } from './resources.js';
import { Level } from './level.js';
import { YouLose } from './youLose.js';
import { YouWin, } from './youWin.js';
import { StartGame } from './startGame.js';

export class Game extends Engine {

    totalScore = 0;
    /**
     * @type Level
     */
    level

    constructor() {
        super({
            width: 1440,
            height: 900,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())

    }

    startGame() {

        console.log("start de game!")

        this.add("StartGame", new StartGame())

        this.level = new Level()
        this.add("level", this.level)
        this.add("youLose", new YouLose())
        this.add("YouWin", new YouWin())


        this.goToScene('StartGame')


    }

    updateScore(score) {
        this.level?.ui?.updateScore(score)
        this.level.powerUpScore(score)
    }

    updateHealth(health) {
        this.level?.ui?.updateHealth(health)
    }
}

new Game()
