var level3 = function (game) { };
var graphics1, graphics2, paddle, paddleSprite, circle,ball,rotationSpeed = 0.01, ballsGroup, IsRotating = false;
level3.prototype = {
    preload: function () {
        this.load.image("circle", "img/FastLim/circle.png");
        this.load.image("ball", "img/FastLim/balls.png");
        this.load.physics('physicsData', 'img/FastLim/arc1.json');
        this.load.image('arc1', 'img/FastLim/arc1.png');
    },
    create: function () {
        this.physics.startSystem(Phaser.Physics.P2JS);
        //  Make things a bit more bouncey
        this.physics.p2.defaultRestitution = 0.8;

  
        circle = this.add.sprite(220, 105, "circle");

        paddle = this.add.sprite(370, this.game.world.centerY+6, 'arc1');
        this.physics.p2.enable(paddle, true);
        paddle.body.clearShapes();
        paddle.body.loadPolygon('physicsData', 'arc1');
        paddle.body.debug = false;
        paddle.body.static = true;

        ball = this.add.sprite(370, this.game.world.centerY + 6, 'ball');
        this.physics.p2.enable(ball, true);
       // ball.static = true;



        keyboard = this.input.keyboard.createCursorKeys();

       
     
        paddle.body.onBeginContact.add(this.updateBallsCollected, paddle);

    },
    update: function ()
    {
        this.Movements();
       
    },
    render: function () {
      
    },
    updateBallsCollected: function (target)
    {
       // ball.body.x -= 1;// this.game.rnd.integerInRange(150, 330);
       // ball.body.y += 1; //this.game.rnd.integerInRange(270, 450);
        console.log(target);
    },
    Movements: function () {
        
        if (keyboard.right.isDown) {
            paddle.body.rotateRight(rotationSpeed);
        }
        if (keyboard.left.isDown) {
            paddle.body.rotateLeft(rotationSpeed);
            //paddle.rotation -= rotationSpeed;
        }

        IsRotating = keyboard.right.isDown || keyboard.left.isDown;
        paddle.body.fixedRotation = !IsRotating;
        
        ball.body.y++;

    },

    drawRandomBalls: function ()
    {
        ballsGroup = this.add.group();
        var x = 410 ,
            y = 115;
            
        var ball = ballsGroup.create(x, y, 'ball');
        ball.reset(x, y);
        
        this.game.physics.p2.enable(ball, false);
        ball.anchor.set(0.5);
        ball.static = true;

     
        ballsGroup.add(ball);
        ballsGroup.setAll('body.checkWorldBounds', true);
        ballsGroup.setAll('body.outOfBoundsKill', true);
        ballsGroup.setAll('body.immovable', true);
        ballsGroup.setAll('body.allowGravity', false);
        //ball.body.x += 2;
        



    }

}