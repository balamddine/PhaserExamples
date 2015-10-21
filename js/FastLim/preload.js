var preload = function (game) { };
preload.prototype = {
    preload: function () {
        this.load.image('playbtn', 'img/FastLim/play.png');
        this.load.image('logo', 'img/FastLim/logo.png');
        this.load.image('fb', 'img/FastLim/fb.png');
        this.load.image('twitter', 'img/FastLim/twitter.png');
        this.load.image('insta', 'img/FastLim/insta.png');
        this.load.image('setting', 'img/FastLim/stng.png');
        this.load.image("ground", "img/FastLim/ground.png");

        this.load.atlasJSONArray("Lim", "img/FastLim/Lim.png", "img/FastLim/Lim.json");
        this.load.spritesheet("coin", "img/FastLim/coin.png", 44, 40, 10);
        

        this.loadingBar = this.add.sprite(380, 240, "loadingbar");
        this.loadingBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.loadingBar);

    },
    create: function () {

        this.stage.backgroundColor = "#000";
        this.state.start("level3");
      
    }
}