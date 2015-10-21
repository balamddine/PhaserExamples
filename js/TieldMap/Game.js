var cw = $(window).width();
var ch = $(window).height();
var map;
var tileset;
var layer;
var game = new Phaser.Game(cw, 700, Phaser.AUTO, 'test');
$(window).resize(function () { resizer(); });
var BasicGame = function (game) { };
var player, jumpLength = 500, jumpHeight = 100;

BasicGame.Boot = function (game) { };

BasicGame.Boot.prototype = {
    preload: function () {
        
        game.load.tilemap('background', '../img/TiledMap/Map.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', '../img/TiledMap/background.png');
        game.load.image('player', '../img/runner/Player.png');
        game.time.advancedTiming = true;
    },
    create: function () {
        this.ScaleGame;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#787878';
        map = game.add.tilemap('background');
        map.addTilesetImage('Background', 'tiles');
        layer = map.createLayer('Tile Layer 1');
        map.setCollisionByExclusion([0], true);
        layer.resizeWorld();

        player = game.add.sprite(32, game.world.height - 20, 'player');
       
        game.physics.enable(player);
        player.body.linearDamping = 1;
        player.body.collideWorldBounds = true;
        player.anchor.setTo(0.5, 1);
        game.camera.follow(player);
        
        game.input.onDown.add(this.jump, this);
       
        
    },
    render: function () {
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
        game.debug.text("Click/tap to jump", 215, 300, "#ffffff");
        game.debug.bodyInfo(player, 32, 32);
    },
    jump: function () {
        // Cancel if already jumping
        if (player.jumping) {
            return;
        }

        // Reset the angle
        player.angle = 0;

        // Set the jumping flag
      player.jumping = true;

        // Do the 'jump' tweens
      game.add.tween(player)
            .to({ y: jumpMaxHeight-jumpHeight,x:player.body.x+20 }, jumpLength * 0.5, Phaser.Easing.Quadratic.Out)
           .to({ y: game.world.height-player.body.height }, jumpLength * 0.5, Phaser.Easing.Quadratic.In).start();
       
        // Do the 'spin' tween, and reset the jumping flag when done
        game.add.tween(player)
            .to({ angle: 360 }, jumpLength, Phaser.Easing.Linear.None, true)
            .onComplete.add(function () {
                player.jumping = false;
            }, this);
    },
    update: function () {
        game.physics.arcade.collide(player, layer);
        player.body.velocity.x = 0;
        player.body.x += 5;

    },
    ScaleGame:function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);
    }
};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');




function resizer() {
    var myheight = $(window).height();
    var mywidth = $(window).width();
    try {
        $("#GamePanel").width = Number(mywidth);
        $("#GamePanel").height = Number(myheight);
        game.width = Number(mywidth);

        game.height = Number(myheight);
        game.stage._bounds.width = Number(mywidth);
        game.stage._bounds.height = Number(myheight);
        game.renderer.resize(Number(mywidth), Number(myheight));
        Phaser.Canvas.setSmoothingEnabled(game.context, false);
    }
    catch (e) {
        console.log("Error description: " + e.message);
    }
}