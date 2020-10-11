import * as PIXI from 'pixi.js';

export default class Infobar {
    constructor(width, height, wins, coins) {
        this.infoStyle = {
            fontFamily: 'Arial',
            fontSize: '14px',
            align: 'center',
            fill: 'yellow',
        };
        this.infobar = null;
        this.width = width;
        this.height = height;
        this.coins = coins;
        this.wins = wins;
        this.initialize();
    }

    initialize() {
        this.infobar = new PIXI.Container();
        this.infobar.x = this.width;
        this.infobar.y = this.height;
        this.infobar.width = 100;
        this.infobar.height = 50;

        this.infobarLayout = new PIXI.Graphics();

        this.infobarLayout.beginFill('black');
        this.infobarLayout.lineStyle(5, 'black');
        this.infobarLayout.drawRect(0, 0, 100 , 50);


        this.totalWinsText = new PIXI.Text('Wins: ' + this.wins, this.infoStyle);

        this.totalWinsText.position.x = 5;
        this.totalWinsText.position.y = 8;


        this.totalCoinsText = new PIXI.Text('Coins: ' + this.coins, this.infoStyle);

        this.totalCoinsText.position.x = 5;
        this.totalCoinsText.position.y = 27;


        this.infobar.addChild(this.infobarLayout, this.totalWinsText, this.totalCoinsText);
    }
}