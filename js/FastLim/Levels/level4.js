var level4 = function (game) { };
var arc, graphics1, circle, keyboard, rotationSpeed = 50, IsRotating=false;
level4.prototype = {
    preload: function () {
        this.load.physics('physicsData', 'img/FastLim/arc.json');
        this.load.image('arc', 'img/FastLim/arc.png');
    },
    create: function () {
        this.physics.startSystem(Phaser.Physics.P2JS);

        //  Make things a bit more bouncey
        this.physics.p2.defaultRestitution = 0.8;

        graphics1 = this.add.graphics(this.game.world.centerX, this.game.world.centerY);
        graphics1.lineStyle(8, 0xffffff);
        circle = graphics1.arc(0, 0, 110, this.game.math.degToRad(0), this.game.math.degToRad(360), false);


        arc = this.add.sprite(this.game.world.centerX+70, this.game.world.centerY, 'arc');
        this.physics.p2.enable(arc, true);
        arc.body.clearShapes();
        arc.body.loadPolygon('physicsData', 'arc');
       // arc.body.fixedRotation = true;
       
        keyboard = this.input.keyboard.createCursorKeys();
    },
    update: function ()
    {
        this.Movements();
    },
    Movements: function ()
    {

        arc.body.setZeroVelocity();
        if (keyboard.right.isDown) {
           arc.body.rotateRight(rotationSpeed);
        }
        if (keyboard.left.isDown) {
            arc.body.rotateLeft(rotationSpeed);
        }

      
    }
}