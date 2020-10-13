import * as PIXI from "pixi.js";
import {reelMap} from "./reelmap";

export default class Reel {

    constructor(id) {

        this.x = 70;
        this.y = 25;
        this.width = 715;
        this.height = 300;
        this.id = id;
        this.initialize();
    }

    initialize() {
        this.reelContainer = new PIXI.Container();

        this.reelContainer.x = this.x;
        this.reelContainer.y = this.y;
        this.reelContainer.width = this.width;
        this.reelContainer.height = this.height;
        this.fillReels();

    }

    fillReels() {
        let winRow = this.autoWin ? this.randomInt(0, 2) : false;
        let winItem = this.autoWin ? this.randomInt(1, 5) : false;

        this.reelContainer.removeChildren();
        this.rollResult = [];
        this.rollResultItem = [];

        for (let row = 0; row <= 2; row++) {
            const reel = {
                symbols: [],
                position: 0,
                previousPosition: 0,
                blur: new PIXI.filters.BlurFilter(),
            };
            reel.blur.blurX = 0;
            reel.blur.blurY = 0;
            this.rollResult[row] = [];
            for (let pos = 0; pos <= 2; pos++) {
                let index = row === winRow ? winItem : this.randomInt(0, 5);
                this.rollResult[row].push(index);
                let item = new PIXI.Sprite(PIXI.Texture.from(this.id.reel[index].url));
                item.x = reelMap[row][pos].x;
                item.y = reelMap[row][pos].y;
                item.scale.x = item.scale.y = Math.min(192 / item.width, 192 / item.height);
                this.reelContainer.addChild(item);
                reel.symbols.push(item);
            }
            this.rollResultItem.push(reel);
        }
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}