var level1 = function (game) { };
var Lim,
    CoinGroup,
    onGround = false,
    onBlock = false,
    ShapesBlock,
    isMoving = true,
    jumpTimer = 0,
    FireGroup,
    scoreTxt,
    HintText,
    ground,
    keyboard,
    LimH = 34,
    LimW = 47,
    CanvasH = 500,
    CanvasW = 500,
    CanvasMaxHeight = 1500,
    limsp = 4,
    limpJmpS = 6,
    CoinCollected = 0,
    weel;

level1.prototype = {
    preload: function () {
        this.load.spritesheet("fire", "img/FastLim/fire.png", 200, 200, 16);
        this.load.image("weel", "img/FastLim/weel.png");
    },
    create: function () {

       // this.world.resize(CanvasW*2, CanvasMaxHeight);
        this.physics.startSystem(Phaser.Physics.P2JS);
        //this.physics.arcade.gravity.y = 300;

       
     

        scoreTxt = this.add.text(30, 30, " S C O R E : ", { font: "18px Arial", fill: "#FFFFFF", align: "center" });
        scoreTxt.fixedToCamera = true;
        Lim = this.add.sprite(400, 35, "Lim", "lim0-0");
        Lim.scale.x *= -1;
        Lim.anchor.setTo(0.5, 0.5);
        Lim.enableBody = true;
        ground = this.add.sprite(0, CanvasH-5, "ground");
        weel = this.add.sprite(400, 250, "weel");
        weel.anchor.set(0.5, 0.5);
        this.physics.p2.enable([Lim, ground, weel], true);
        //this.physics.enable([Lim, ground, weel], Phaser.Physics.ARCADE);

        Lim.body.collideWorldBounds = true;
        Lim.body.gravity.y = 1000;
        Lim.body.maxVelocity.y = 500;

        ground.body.allowGravity = false;
        ground.body.immovable = true;

        weel.body.allowGravity = false;
        weel.body.immovable = true;
        weel.body.setCircle(45);
        //this.DrawCoins("Rectangle");
        //this.DrawShapesBlocks("Rectangle");
        //this.DrawFire();
        this.SetDieAnimation();
        this.SetWalkAnimation();
      //  this.camera.follow(Lim);
        keyboard = this.input.keyboard.createCursorKeys();
       
    },
    update: function () {

        onGround = this.physics.arcade.collide(Lim, ground);
        onweel = this.physics.arcade.collide(Lim, weel);
        this.physics.arcade.overlap(Lim, CoinGroup, this.updateCoinCollected, null, this);
        this.LimMovements();
          
        weel.body.rotateLeft(2);
    },
    LimMovements: function () {
        if (!isMoving) return;
       // Lim.body.x += limsp;
        if (keyboard.right.isDown)
        {
            Lim.body.x += limsp;
        }
        if (keyboard.left.isDown)
        {
            Lim.body.x -= limsp;
        }
        if (keyboard.up.isDown && onGround && this.time.now > jumpTimer) {
            Lim.body.velocity.y = -500;
            jumpTimer = this.time.now + 750;

        }

    },
    updateCoinCollected: function (Lim,coin) {
        coin.kill();
        CoinCollected++;
        scoreTxt.text = "S C O R E : " + CoinCollected;
    },
    SetWalkAnimation: function () {
        Lim.animations.add('walk', [
       'lim0-0',
       'lim0-1',
       'lim0-2',
       'lim0-3',
       'lim0-4',
       'lim0-5'], 10, true, false);
        // play animation
        Lim.animations.play('walk');
    },
    SetDieAnimation: function () {
        Lim.animations.add('die', [
       'lim0-6',
       'lim0-7',
       'lim0-8',
       'lim0-9',
       'lim0-10',
       'lim0-11',
       'lim0-12',
       'lim0-13',
       'lim0-14',
       'lim0-15'], 10, true, false);
    },
    GameOver: function (lim, fire) {
        Lim.animations.play('die', 15, false, true);
        isMoving = false;
    },
    render: function () {
        this.game.debug.body(Lim);
        this.game.debug.body(weel);
        //  ShapesBlock.forEachAlive(this.renderGroup, this);
       
    }, renderGroup: function (element) {
        this.game.debug.body(element);
    }
    //DrawFire:function(){
    //    FireGroup = this.add.group();
    //    var x = CanvasW ,
    //        y = 410;
            
    //    var fire = FireGroup.create(x, y, 'fire');
    //    fire.scale.set(0.5, 0.6);
       
    //    fire.reset(x, y);
    //    this.game.physics.enable(fire, Phaser.Physics.ARCADE);
    //    fire.body.setSize(155, 70, 15, 43);
    //    fire.animations.add('idle');
    //    fire.animations.play('idle', 15, true);
       
    //    FireGroup.add(fire);
    //    FireGroup.setAll('body.checkWorldBounds', true);
    //    FireGroup.setAll('body.outOfBoundsKill', true);
    //    FireGroup.setAll('body.immovable', true);
    //    FireGroup.setAll('body.allowGravity', false);
       
    //},
    //DrawShapesBlocks:function (shape){
    //    ShapesBlock = this.add.group();
    //    switch (shape) {
    //        case "Rectangle": this.drawRectangle();
    //    }
    //},
    //drawRectangle:function(){
        
    //    for (i = 0; i < 20;i++)
    //    {
            
    //        var x = (100 * i/2 + 50),
    //        y = CanvasMaxHeight - (i * 150 / 2);
    //        if (x > CanvasW * 2) {

    //            x = (CanvasW * 2 - 100) - i * 2;
    //            console.log("out of bound----------x= "+x+"------------y= "+y)
    //        }
            
    //        var floor = ShapesBlock.create(x, y, 'loadingbar');
    //        this.game.physics.enable(floor, Phaser.Physics.ARCADE);
    //        ShapesBlock.add(floor);

    //    }

    //    ShapesBlock.setAll('body.checkWorldBounds', true);
    //    ShapesBlock.setAll('body.outOfBoundsKill', true);
    //    ShapesBlock.setAll('body.immovable', true);
    //    ShapesBlock.setAll('body.allowGravity', false);
    //},
    //DrawCoins: function (shape) {

    //    CoinGroup = this.add.group();
    //    switch (shape)
    //    {
    //        case "Rectangle": this.drawRectCoins();
    //    }
        
        
    //    CoinGroup.setAll('body.checkWorldBounds', true);
    //    CoinGroup.setAll('body.outOfBoundsKill', true);
    //    CoinGroup.setAll('body.immovable', true);
    //    CoinGroup.setAll('body.allowGravity', false);
       

    //},
    //drawRectCoins: function () {
    //    for (j = 0; j < 3; j++) {
    //        var x = this.getRandomIntInclusive(1,CanvasW*2);
    //        var y = this.getRandomIntInclusive(CanvasMaxHeight/2,CanvasMaxHeight)
    //        var coin = CoinGroup.create(x, y, 'coin');
    //        coin.scale.set(0.5, 0.5);
    //        coin.anchor.setTo(0.5, 0.5);
    //        this.game.physics.enable(coin, Phaser.Physics.ARCADE);
    //        CoinGroup.add(coin);
    //        coin.reset(x, y);
    //        coin.animations.add('idle');
    //        coin.animations.play('idle', 15, true);
    //    }
    //},
    //getRandomIntInclusive: function (min, max) {
    //    return Math.floor(Math.random() * (max - min + 1)) + min;
    //},
   
}