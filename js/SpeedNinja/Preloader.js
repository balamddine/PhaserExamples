Ninja.Preloader = function (game) {
    Ninja.cw = window.innerWidth;
    Ninja.ch = window.innerHeight;
    
}

Ninja.Preloader.prototype = {
    preload: function () {

        this.load.image('platform', 'img/Ninja/platform.png');
        this.load.image('buttonPause', 'img/Ninja/pause.png');
        this.load.image('buttonPlay', 'img/Ninja/play.png');
        this.load.image('buttonleft', 'img/Ninja/Left.png');
        this.load.image('buttonRight', 'img/Ninja/Right.png');
        this.load.image('buttonSpeed', 'img/Ninja/speed.png');
        this.load.image('logo', 'img/Ninja/logo.png');
        this.load.image('logo2', 'img/Ninja/logo2.png');
        this.load.image('TapandHold', 'img/Ninja/tapAndHold.png');
        this.load.spritesheet('run', 'img/Ninja/run.png', 56, 70, 9);
        this.add.tileSprite(0, 0, Ninja.cw, Ninja.ch, 'city').alpha = 0.3;
        this.add.text(Ninja.cw / 2, (Ninja.ch / 2) + 20, "Loading ... ", { font: "20px Arial", fill: "#FFFFFF", align: "center" });
        this.preloadBar = this.add.sprite(Ninja.cw / 2 - 50, Ninja.ch / 2 - 21, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);
    },
    create: function () {
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
       
        this.scale.setShowAll();
        this.scale.refresh();
        this.scale.startFullScreen();
        this.state.start('MainMenu');
        
    }
}