var Ninja = {};
Ninja.Boot = function (game) { };
Ninja.Boot.prototype = {
    preload: function () {
        // preload the loading indicator first before anything else
        this.load.image('preloaderBar', 'img/Ninja/loading-bar.png');
        this.load.image('city', 'img/Ninja/city.jpg');
      
    },
    create: function () {
        this.add.tileSprite(0, 0, Ninja.cw, Ninja.ch, 'city').alpha = 0.3;
        this.state.start('Preloader');
    }
}