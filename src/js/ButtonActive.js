import * as PIXI from "pixi.js";

export default class ButtonActive {
    constructor(id, width, height, startReel) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.startReel = startReel;
        this.initialize();

    }

    initialize() {
        this.buttonActive = new PIXI.TilingSprite(PIXI.Texture.from(this.id.tools.BTN_Spin.url), this.id.tools.BTN_Spin.sourceSize.w, this. id.tools.BTN_Spin.sourceSize.h);
        this.buttonActive.x = this.width - this.id.tools.BTN_Spin.sourceSize.w - 38;
        this.buttonActive.y = this.height / 2 - 49;
        this.buttonActive.interactive = true;
        this.buttonActive.buttonMode = true;

        this.buttonActive.on('click', this.startReel.bind(this));

        return this.buttonActive;
    }


}
