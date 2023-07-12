import { Game, GameScene } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    bgSpeed: 2,
        score: {
            x: 10,
            y: 10,
            anchor: 0,
            style: {
                fontFamily: "Verdana",
                fontWeight: "bold",
                fontSize: 44,
                fill: ["#FF7F50"]
            }
        },
    diamonds: {
        chance: 0.4,
        offset: {
            min: 100,
            max: 200
        }
    },
    platforms: {
        moveSpeed: -1.0,
        ranges: {
            rows: {
                min: 2,
                max: 4
            },
            cols: {
                min: 5,
                max: 9
            },
            offset: {
                min: 60,
                max: 200
            }
        }
    },

    hero: {
        jumpSpeed: 15,
        maxJumps: 2,
        position: {
            x: 400,
            y: 400
        }
    },  
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    scenes: {
        "Game": Game
    }

    
};
