import * as PIXI from 'pixi.js';
import Reel from './Reel';
import Layout from './Layout';
import Text from './Text';
import ButtonActive from './ButtonActive';
import ButtonOff from './ButtonOff';
import Infobar from './Infobar';

export default class App {
    constructor() {
        this.loader = PIXI.Loader.shared;
        this.background = '';
        this.buttonActive = '';
        this.buttonOff = '';
        this.countRolls = 0;
        this.reelContainer = '';
        this.rollResult = [];
        this.id = {};
        this.autoWin = false;
        this.gameOver = false;
        this.displayedWins = 0;
        this.coins = 100;
        this.textDisplayed = false;
        this.init();

    }

    init() {
        this.app = new PIXI.Application({
                width: 960,
                height: 536,
                antialias: true,
                transparent: false,
                resolution: 1
            }
        );
        document.body.appendChild(this.app.view);


        this.loader.add('texturepack', 'src/assets/sprites.json');


        this.loader.load((loader, resources) => {
            this.addLoadingScreen();
            this.id = resources.texturepack.data;
            this.background = new PIXI.TilingSprite(PIXI.Texture.from(this.id.tools.BG.url), this.app.view.width, this.app.view.height);
            this.app.stage.addChild(this.background);

            this.createActiveButton();
            this.createButtonOff();
            this.createReel();
            this.renderInfobar();
        });
        this.loader.onProgress.add(() => {});
        this.loader.onComplete.add(() => {
            this.loadingText.visible = false;
        });

    }

    addLoadingScreen() {
        this.layout = new PIXI.Graphics();

        this.layout.beginFill('0x000000');
        this.layout.lineStyle(5, '0x000000');
        this.layout.drawRect(0, 0, this.app.width, this.app.height);

        this.loadingText = new PIXI.Text('LOADING...', this.winTextStyle);

        this.loadingText.position.x = this.app.view.width / 2 - 200;
        this.loadingText.position.y =  this.app.view.height / 2 - 70;

        this.app.stage.addChild(this.layout, this.loadingText);

    }

    startReel() {
        if(this.countRolls >= 4) {
            this.autoWin = true;
            this.countRolls = 0;
        } else {
            this.countRolls++;
        }
        this.reelContainer.fillReels();
        this.autoWin = false;
        this.checkWinning();
    }


    checkWinning() {
        this.coins -= 5;
        for (let row of this.reelContainer.rollResult)  {
            if(row.every( (val, i, arr) => val === arr[0]) ||
                (row.includes(0) && this.countDuplicates(row) >= 1)
            ) {
                this.displayedWins++;
                this.coins += 10;
                this.showText('YOU WON!');
                this.disableButton();
                return;
            }
        }
        this.renderInfobar();
        if(this.coins <= 0) {
            this.showText('NO COINS :(');
            this.gameOver = true;
            this.disableButton();
        }


    }

    countDuplicates(original) {
        const uniqueItems = new Set();
        const duplicates = new Set();
        for (const value of original) {
            if (uniqueItems.has(value)) {
                duplicates.add(value);
                uniqueItems.delete(value);
            } else {
                uniqueItems.add(value);
            }
        }
        return duplicates.size;
    }

    disableButton() {
        this.buttonActive.buttonActive.visible = false;
        this.buttonOff.buttonOff.visible = true;
    }

    enableButton() {
        this.buttonActive.buttonActive.visible = true;
        this.buttonOff.buttonOff.visible = false;
    }

    hideText() {
        this.layout.layout && this.layout.layout.destroy();
        this.text.text && this.text.text.destroy();
    }

    closeWinMessage() {
        if(this.textDisplayed && !this.gameOver) {
            this.hideText();
            this.enableButton();
            this.textDisplayed = false;
            this.renderInfobar();
        }
    }

    renderInfobar() {
        this.infobar = new Infobar(this.app.view.width - 136, this.app.view.height / 2 + 80, this.displayedWins, this.coins);
        this.app.stage.addChild(this.infobar.infobar);
    }

    createActiveButton() {
        this.buttonActive = new ButtonActive(this.id, this.app.view.width, this.app.view.height, this.startReel.bind(this));
        this.app.stage.addChild(this.buttonActive.buttonActive);
    }

    createButtonOff() {
        this.buttonOff = new ButtonOff(this.id, this.app.view.width, this.app.view.height);
        this.app.stage.addChild(this.buttonOff.buttonOff);
    }

    createReel() {
        this.reelContainer = new Reel(this.id);
        this.app.stage.addChild(this.reelContainer.reelContainer);
    }

    showText(text) {
        this.layout = new Layout(this.reelContainer.reelContainer.width, this.reelContainer.reelContainer.height);
        this.text = new Text(this.reelContainer.reelContainer.height, this.reelContainer.reelContainer.height, text);
        this.textDisplayed = true;
        this.layout.layout.on('click', this.closeWinMessage.bind(this));
        this.reelContainer.reelContainer.addChild(this.layout.layout, this.text.text);
        setTimeout(this.closeWinMessage.bind(this), 2000);
    }
}