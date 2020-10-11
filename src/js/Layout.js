import * as PIXI from "pixi.js";

export default class Layout {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.initialize();
    }

    initialize() {
        this.layout = new PIXI.Graphics();

        this.layout.beginFill('0x26C350');
        this.layout.lineStyle(5, '0x26C350');
        this.layout.drawRect(0, 0, this.width, this.height);
        this.layout.alpha = 0.5;
        this.layout.interactive = true;
        this.layout.buttonMode = true;
    }
}