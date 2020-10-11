import * as PIXI from "pixi.js";

export default class ButtonOff {
    constructor(id, width, height) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.initialize();

    }

    initialize() {
        this.buttonOff = new PIXI.TilingSprite(PIXI.Texture.from(this.id.tools.BTN_Spin_d.url), this.id.tools.BTN_Spin_d.sourceSize.w, this. id.tools.BTN_Spin_d.sourceSize.h);
        this.buttonOff.x = this.width - this.id.tools.BTN_Spin_d.sourceSize.w - 38;
        this.buttonOff.y = this.height / 2 - 49;
        this.buttonOff.visible = false;

        return this.buttonOff;
    }

    
}
