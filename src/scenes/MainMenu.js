class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainmenuScene');
        console.log('MainMenu: constructor');
    }

    // semicolons might break this, nathan didnt use any semis
    init() {
        console.log('MainMenu: init');
        this.HP = 100;
        this,EXP = 0;
        console.log(`HP: ${this.HP} EXP; ${this.EXP}`);
    }

    preload() {
        console.log('MainMenu: preload');
        this.preload.path = './assets/img/';
        this.preload.image('tomato', './assets/img/tomato.png');
    }

    create() {
        console.log('MainMenu: create');

        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        }

        this.scene.start('playScene, playerStats');
    }
}