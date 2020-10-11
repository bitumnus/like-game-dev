import * as PIXI from "pixi.js";

export default class Text {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
        this.winTextStyle = {
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: '76px',
            align: 'center',
            fill: 'yellow',
        };
        this.initialize();
    }

    initialize() {
        this.text = new PIXI.Text(this.text, this.winTextStyle);

        this.text.position.x = this.width / 2 - 76;
        this.text.position.y = this.height / 2 - 50;
    }
}