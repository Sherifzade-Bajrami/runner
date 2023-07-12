import * as PIXI from "pixi.js";
import * as Matter from "matter-js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { Loader } from "./Loader";
import { ScenesManager } from "./ScenesManager";
import { Howl } from 'howler';

class Application {

    constructor() {
        this.audio = null; // Initialize the audio property
        // Other class properties and methods
      }
    run(config) {

        this.audio = new Howl({
            src: ['Voicy_Game.mp3'], 
            autoplay: true, // Set to true if you want the audio to play automatically
            loop: false, // Set to true if you want the audio to loop
            volume: 1.0, // Adjust the volume from 0.0 to 1.0
          });
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);

        this.config = config;

        this.app = new PIXI.Application({resizeTo: window});
        document.body.appendChild(this.app.view);

        this.scenes = new ScenesManager();
        this.app.stage.interactive = true;
        this.app.stage.addChild(this.scenes.container);

        this.loader = new Loader(this.app.loader, this.config);
        this.loader.preload().then(() => this.start());

        this.createPhysics();
    }

    createPhysics() {
        this.physics = Matter.Engine.create();
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, this.physics);
    }

    res(key) {
        return this.loader.resources[key].texture;
    }

    sprite(key) {
        return new PIXI.Sprite(this.res(key));
    }

    start() {
        this.scenes.start("Game");
        this.audio.play(); 
    }
   

}

export const App = new Application();
