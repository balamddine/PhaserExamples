var Runner = {};
Runner.Boot = function (game) {
    this._GameWidth = window.innerWidth;
    this._GameHeight = window.innerHeight;
    this._player = null;
    this._obstcle1 = null;
    this._obstcle1Width = 20;
    this._obstcle1Height = 20;
    this._playerwidth = 50;
    this._playerheight = 50;
    this._playerSpeed = 5;
    this._BlockGroup = null;
    this._BlockTimer = null;
    this._keyboard = null;
    this._playerjumping = false;
    this._playerjumpSpeed = -250;

};
Runner.Boot.prototype = {
    preload: function () {
        // preload the loading indicator first before anything else
        this.load.image('player', 'img/runner/Plr.png');
        this.load.image('obstcle', 'img/runner/obstacle2.png');
    },
    create: function () {
        this.game.stage.backgroundColor = 0xffffff;
        this.game.world.setBounds(0, 0, this._GameWidth * 2, this._GameHeight);
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 300;
        this._player = this.add.sprite(0, this._GameHeight - this._playerheight, 'player');
        this._obstcle1 = this.add.sprite(100, this._GameHeight - this._obstcle1Height, 'obstcle');


        this._BlockGroup = this.add.group();
        this._BlockGroup.setAll('body.checkWorldBounds', true);
        this._BlockGroup.setAll('body.outOfBoundsKill', true);
        this._BlockGroup.setAll('body.immovable', true);
        this._BlockGroup.setAll('body.allowGravity', false);
        this._player.enableBody = true;


        this.physics.enable(this._player, Phaser.Physics.ARCADE);
        this._player.body.collideWorldBounds = true;
        this._keyboard = this.input.keyboard.createCursorKeys();
        //this._BlockTimer = this.time.events.loop(2800, this.AddBlock);
        this.game.camera.follow(this._player);
    },
    update: function () {
        this._player.body.x += this._playerSpeed;
        if (this._keyboard.up.isDown && this._player.body.onFloor()) {
            this._playerjumping = true;
            this._player.body.velocity.y = this._playerjumpSpeed;

        }
        else {
            this._playerjumping = false;
        }
        
    },
    AddBlock: function () {

    }
}