var my_media = null;
Ninja.Game = function (game) {
    Ninja.Player;
    Ninja.city;

    Ninja.Superjumpkey;
    Ninja.scoreTimer;
    Ninja.Isjumping;
    Ninja.platformGroup;
    Ninja.platformGroupCount = 2;
    Ninja.keyboard;
    Ninja.score = 0;
    Ninja.stateText;
    Ninja.restartTxt;
    Ninja.MainMenuTxt;
    Ninja.introText;
    Ninja.HighScoreTxt;
    Ninja.HighScore;
    Ninja.introHand;
    Ninja.buttonLeft;
    Ninja.buttonRight;
    Ninja.buttonSpeed;
    Ninja.buttonPause;
    Ninja.buttonVolume;
    Ninja.volume = true;
    Ninja.speed = false;
    Ninja.left = false;
    Ninja.right = false;
    Ninja.gameover = false;
    Ninja.floorSpeed = 10;
    Ninja.plrspeed = 5;
    Ninja.plrSupspeed = 18;
    Ninja.blockspeed = 150;
    Ninja.pltTimer;
    Ninja.IntroMusic = "intro.mp3";
    Ninja.overlapMusic = "overlap.ogg";

};
Ninja.Game.prototype = {
    preload: function () {
        this.load.image('buttonPlay', 'img/Ninja/play.png');
        this.load.image('buttonleft', 'img/Ninja/Left.png');
        this.load.image('buttonRight', 'img/Ninja/Right.png');
        this.load.image('buttonSpeed', 'img/Ninja/speed.png');
        this.load.image('volumeup', 'img/Ninja/volume-up.png');
        this.load.image('mute', 'img/Ninja/mute.png');

    },
    create: function () {

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 200;


        Ninja.city = this.add.tileSprite(0, 0, Ninja.cw, Ninja.ch, 'city');
        Ninja.Player = this.add.sprite(0, 0, 'run');
        Ninja.Player.enableBody = true;
        Ninja.platformGroup = this.add.group();
        this.physics.enable(Ninja.Player, Phaser.Physics.ARCADE);
        this.AddPlatform();
        Ninja.Player.animations.add('run');
        Ninja.stateText = this.add.text((Ninja.cw / 2) - 100, 45, " S C O R E : ", { font: "25px Arial", fill: "#FFFFFF", align: "center" });
        this.CreateGameController();
        Ninja.Superjumpkey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        Ninja.keyboard = this.input.keyboard.createCursorKeys();
        Ninja.pltTimer = this.time.events.loop(2800, this.AddPlatform);
        Ninja.scoreTimer = this.time.events.loop(2000, this.addscore);


    },
    update: function () {

        var collide = this.physics.arcade.collide(Ninja.Player, Ninja.platformGroup, this.updatePlatformGroup, null, this);
        Ninja.city.tilePosition.x -= Ninja.floorSpeed;

        if (Ninja.keyboard.left.isDown || Ninja.left) {
            Ninja.Player.body.x -= Ninja.plrspeed;
            if (Ninja.Player.body.x <= 0) Ninja.Player.body.x = 0;
        }
        if (Ninja.keyboard.right.isDown || Ninja.right) {
            Ninja.Player.body.x += Ninja.plrspeed;
        }
        if (Ninja.Superjumpkey.isDown || Ninja.speed) {
            Ninja.Player.body.x += Ninja.plrSupspeed;

        }
        if (Ninja.Player.body.bottom >= this.world.bounds.bottom) {
            Ninja.gameover = true;
            this.GameOver();
        }
        else {
            Ninja.gameover = false;
        }
        this.checkPlayerPlatformCollision(collide);
        if (!Ninja.gameover && Ninja.score != 0 && Ninja.score % 35 == 0) {
            this.SpeedUpTheGame();
        }


    },
    CreateGameController: function () {
        Ninja.buttonPause = this.add.sprite(Ninja.cw * 0.9, 50, 'buttonPause');
        Ninja.buttonPause.inputEnabled = true;
        Ninja.buttonPause.events.onInputUp.add(function () {
            this.game.paused = true;
            Ninja.buttonPause.loadTexture("buttonPlay");
        }, this);
        this.input.onDown.add(function () {
            if (this.game.paused) {
                this.game.paused = false;
                Ninja.buttonPause.loadTexture("buttonPause");
            }

        }, this);

        Ninja.buttonVolume = this.add.button(Ninja.cw * 0.75, 50, 'mute', this.changevolume, this);


        Ninja.buttonLeft = this.add.button(Ninja.cw * 0.1, Ninja.ch - 120, 'buttonleft'); //, null, this, 0, 1, 0, 1);
        Ninja.buttonRight = this.add.button((Ninja.cw * 0.1) + 120, Ninja.ch - 120, 'buttonRight'); //, null, this, 0, 1, 0, 1);
        Ninja.buttonSpeed = this.add.button(Ninja.cw * 0.85, Ninja.ch - 120, 'buttonSpeed'); //, null, this, 0, 1, 0, 1);

        Ninja.buttonLeft.events.onInputOver.add(function () { Ninja.left = true; });
        Ninja.buttonLeft.events.onInputOut.add(function () { Ninja.left = false; });
        Ninja.buttonLeft.events.onInputDown.add(function () { Ninja.left = true; });
        Ninja.buttonLeft.events.onInputUp.add(function () { Ninja.left = false; });

        Ninja.buttonRight.events.onInputOver.add(function () { Ninja.right = true; });
        Ninja.buttonRight.events.onInputOut.add(function () { Ninja.right = false; });
        Ninja.buttonRight.events.onInputDown.add(function () { Ninja.right = true; });
        Ninja.buttonRight.events.onInputUp.add(function () { Ninja.right = false; });

        Ninja.buttonSpeed.events.onInputOver.add(function () { Ninja.speed = true; });
        Ninja.buttonSpeed.events.onInputOut.add(function () { Ninja.speed = false; });
        Ninja.buttonSpeed.events.onInputDown.add(function () { Ninja.speed = true; });
        Ninja.buttonSpeed.events.onInputUp.add(function () { Ninja.speed = false; });

        Ninja.restartTxt = this.add.text((Ninja.cw / 2) - 100, (Ninja.ch / 2) - 80, " ", { font: "20px Arial", fill: "#00FF00", align: "center" });
        Ninja.MainMenuTxt = this.add.text((Ninja.cw / 2) - 95, (Ninja.ch / 2) + 25, " ", { font: "20px Arial", fill: "#FF0000", align: "center" });

    },
    changevolume: function () {
        if (Ninja.volume) {
            Ninja.volume = false;
            Ninja.buttonVolume.loadTexture("mute");
            if (my_media != null) {
                my_media.pause();
            }
        } else {
            Ninja.volume = true;
            Ninja.buttonVolume.loadTexture("volumeup");
            this.playAudio(Ninja.IntroMusic);
        }
    },
    AddPlatform: function () {

        for (j = 0; j < Ninja.platformGroupCount; j++) {
            var x = this.game.rnd.integerInRange(Ninja.cw / 2, Ninja.cw);
            var y = this.game.rnd.integerInRange(Ninja.ch / 3, Ninja.ch - 80);
            var pltfrm = Ninja.platformGroup.create(x, y, 'platform');
            pltfrm.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(pltfrm, Phaser.Physics.ARCADE);
            Ninja.platformGroup.add(pltfrm);
            pltfrm.reset(x, y);
            pltfrm.body.velocity.x -= Ninja.blockspeed;
        }

        Ninja.platformGroup.setAll('body.Ninja.checkWorldBounds', true);
        Ninja.platformGroup.setAll('body.outOfBoundsKill', true);
        Ninja.platformGroup.setAll('body.immovable', true);
        Ninja.platformGroup.setAll('body.allowGravity', false);

    },
    checkPlayerPlatformCollision: function (collide) {
        if (collide) { // jump

            Ninja.Player.body.velocity.y = -220;
            Ninja.Player.animations.play('run', 30, true);

        }
        else {
            Ninja.Player.animations.stop();
        }
    },
    addscore: function () {
        Ninja.score += 1;
        Ninja.stateText.text = " S C O R E : " + Ninja.score;
    },
    SpeedUpTheGame: function () {
        Ninja.plrspeed = 8;
        Ninja.plrSupspeed = 20;
        Ninja.blockspeed = 170;
        Ninja.floorSpeed = 14;
    },
    updatePlatformGroup: function (player, platform) {
        Ninja.platformGroup.remove(platform);
    }
    , GameOver: function () {

        Ninja.Player.kill();
        Ninja.platformGroup.destroy(true, true);
        this.time.events.remove(Ninja.scoreTimer);

        Ninja.HighScore = window.localStorage.getItem('hiscore');
        Ninja.HighScore = Ninja.HighScore ? Ninja.HighScore : Ninja.score;
        Ninja.HighScore = Ninja.score > parseInt(Ninja.HighScore, 10) ? Ninja.score : Ninja.HighScore;
        window.localStorage.setItem('hiscore', Ninja.HighScore);
        Ninja.stateText.text = " G A M E  O V E R.  ";

        Ninja.restartTxt.text = "- - R E S T A R T ";
        Ninja.MainMenuTxt.text = "- -  M A I N  M E N U ";
        Ninja.restartTxt.inputEnabled = true;
        Ninja.MainMenuTxt.inputEnabled = true;
        Ninja.MainMenuTxt.events.onInputDown.add(function () {
            Ninja.score = 0;
            Ninja.floorSpeed = 10;
            Ninja.plrspeed = 5;
            Ninja.plrSupspeed = 18;
            Ninja.blockspeed = 150;
            Ninja.volume = false;
            if (my_media != null) {
                my_media.stop();
                my_media.release();
                my_media = null;
            }
            this.state.start("Boot");
        }, this);
        Ninja.restartTxt.events.onInputDown.add(this.RestGa, this);

    },
    RestGa: function () {
        Ninja.Player.reset(0, 0);
        Ninja.Player.revive();
        Ninja.score = 0;
        Ninja.floorSpeed = 10;
        Ninja.plrspeed = 5;
        Ninja.plrSupspeed = 18;
        Ninja.blockspeed = 150;
        Ninja.stateText.inputEnabled = false;
        Ninja.gameover = false;
        Ninja.stateText.text = "S C O R E : ";
        Ninja.restartTxt.text = " ";
        Ninja.MainMenuTxt.text = " ";
        Ninja.scoreTimer = game.time.events.loop(2000, this.addscore);
        Ninja.volume = false;
        if (my_media != null) {

            my_media.stop();
            my_media.release();
            my_media = null;
        }
        this.state.start("Tutorial");
    },
    playAudio: function (url) {
        // Play the audio file at url
        my_media = new Media("/android_asset/www/audio/" + url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        });
        // Play audio
        if (my_media != null) {
            my_media.play();
        }
    }


}
