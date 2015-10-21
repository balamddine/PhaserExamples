var level2 = function (game) { };
var weel, Lim, onweel = false, isMoving = true, FireGroup, jumpTimer = 0, keyboard, limsp = 4, CanvasH = 500, CanvasW = 800, Time=10,
    limpJmpS = 6, Fire_bg;
var handle;
level2.prototype = {
    preload: function () {
        this.load.image('weel', 'img/FastLim/weel.png');
        this.load.image('player', 'img/FastLim/ball.png');
        this.load.spritesheet("fire", "img/FastLim/fire.png", 200, 200, 16);
        this.load.image('firebackground', 'img/Galaxy/starfield.png');
    },
    create: function () {
        //this.stage.backgroundColor = '#124184';
        Fire_bg = this.add.tileSprite(0, 0, CanvasW, CanvasH, 'firebackground');
        TimeTxt = this.add.text(30, 30, " T I M E : ", { font: "18px Arial", fill: "#FFFFFF", align: "center" });
        this.physics.startSystem(Phaser.Physics.BOX2D);
        this.physics.box2d.debugDraw.joints = true;
        this.physics.box2d.gravity.y = 300;
        //this.physics.box2d.restitution = 0.8;
        this.physics.box2d.setBoundsToWorld();

        handle = new Phaser.Physics.Box2D.Body(this.game, null, this.game.world.centerX, 300, 2);
        handle.setRectangle(10, 10, -(this.game.world.centerX) / 2 + 200, 0, 0);
        this.physics.box2d.enable(handle);
        handle.static = true;
       

        weel = this.add.sprite(400, 700, 'weel');
        this.physics.box2d.enable(weel);
       
        weel.scale.set(0.8,0.8)
        weel.anchor.setTo(0.5, 0.5);
        
        
        weel.body.setCircle(120);
        weel.body.gravityScale = 0;
        weel.enableBody = true;
        weel.name = "weel"

        Lim = this.add.sprite(400, 200, "player");
        
        this.physics.box2d.enable(Lim);
        Lim.body.setCircle(15);
        
        Lim.scale.x *= -1;
        Lim.anchor.setTo(0.5, 0.5);
        Lim.enableBody = true;
        Lim.name = "lim"

        Lim.body.collideWorldBounds = true;
       

        Lim.body.setBodyContactCallback(weel, this.Collision, this);
       // this.SetDieAnimation();
        // this.SetWalkAnimation();
        this.DrawFire();
        this.physics.box2d.revoluteJoint(weel, handle);

        keyboard = this.input.keyboard.createCursorKeys();
     
        this.time.events.add(Phaser.Timer.SECOND * Time, this.GameOver, this);
       
    },
    Collision: function (body1, body2, fixture1, fixture2, begin) {
        
        if (!begin) {
            onweel = false;
          
            return;
           
        }
        if (body1.sprite.name == "lim" && body2.sprite.name == "weel") {
            onweel = true;
        }

        else {
            onweel = false;
        }
        
    },
    GameOver:function()
    {
        if(!onweel)
            Lim.kill();
    },
    update: function ()
    {
        Fire_bg.tilePosition.y += 5;
        Fire_bg.tilePosition.x += 1;
        weel.body.rotateLeft(20);
        this.LimMovements();
    },
    render: function () {
        //this.game.debug.box2dWorld();
        TimeTxt.text = " T I M E :" + this.game.time.events.duration;
    },
    LimMovements: function () {
        if (!isMoving) return;
        // Lim.body.x += limsp;
        if (keyboard.right.isDown) {
            Lim.body.x += limsp;
        }
        if (keyboard.left.isDown) {
            Lim.body.x -= limsp;
        }
        console.log(onweel);
        if (keyboard.up.isDown && onweel && this.time.now > jumpTimer) {
            Lim.body.velocity.y = -200;
            jumpTimer = this.time.now + 750;

        }

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
    }, DrawFire: function () {
        FireGroup = this.add.group();
        for (i = 0; i < 10; i++)
        {
            var x=i*100,
                y = 410;
            var fire = FireGroup.create(x, y, 'fire');
            fire.scale.set(0.5, 0.6);

            fire.reset(x, y);
            this.game.physics.enable(fire, Phaser.Physics.ARCADE);
            fire.body.setSize(155, 70, 15, 43);
            fire.animations.add('idle');
            fire.animations.play('idle', 15, true);
            //FireGroup.add(fire);

        }
        

        FireGroup.setAll('body.checkWorldBounds', true);
        FireGroup.setAll('body.outOfBoundsKill', true);
        FireGroup.setAll('body.immovable', true);
        FireGroup.setAll('body.allowGravity', false);

    }
}