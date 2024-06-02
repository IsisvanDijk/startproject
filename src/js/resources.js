import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'
import { Astroid } from './astroid'

const Resources = {
    Astroid: new ImageSource('images/asteriod.png'),
    Background: new ImageSource('images/background.jpeg', { wrapping: ImageWrapping.Repeat }),
    Bullet: new ImageSource('images/bullet-lilac.png'),
    Comet: new ImageSource('images/comet.png'),
    Loss: new ImageSource('images/game-over.jpg'),
    Shield: new ImageSource('images/shield.png'),
    Ship: new ImageSource('images/spaceShip.png'),
    Start: new ImageSource('images/start.jpg'),
    Win: new ImageSource('images/win.jpeg'),
}

const ResourceLoader = new Loader([
    Resources.Astroid,
    Resources.Background,
    Resources.Bullet,
    Resources.Comet,
    Resources.Loss,
    Resources.Shield,
    Resources.Ship,
    Resources.Start,
    Resources.Win,


])

export { Resources, ResourceLoader }