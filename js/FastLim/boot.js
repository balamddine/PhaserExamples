var boot = function (game) { };
boot.prototype = {
    preload: function () {
        // preload the loading indicator first before anything else
        this.load.image('loadingbar', 'img/FastLim/loading.png');
       
    },
    create: function () {

       
      //  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      //  this.scale.pageAlignHorizontally = true;
      //  this.scale.setScreenSize();
        this.state.start("Preload");
    }
}