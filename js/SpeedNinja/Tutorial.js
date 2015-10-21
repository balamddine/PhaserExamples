Ninja.Tutorial = function (game) {};
Ninja.Tutorial.prototype = {
    create: function () {
        var g = this;
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.add.tileSprite(0, 0, Ninja.cw, Ninja.ch, 'city').alpha = 0.3;
        Ninja.Player = this.game.add.sprite(Ninja.cw / 2, 50, 'run');
        Ninja.Player.enableBody = true;

        this.add.sprite(Ninja.cw * 0.1, Ninja.ch - 120, 'buttonleft');
        this.add.sprite((Ninja.cw * 0.1) + 92, Ninja.ch - 120, 'buttonRight');
        this.add.sprite(Ninja.cw * 0.85, Ninja.ch - 120, 'buttonSpeed');

        Ninja.introHand = this.game.add.sprite((Ninja.cw * 0.1) + 15, Ninja.ch - 50, 'TapandHold');
        Ninja.introHand.enableBody = true;
        this.physics.arcade.enable([Ninja.Player, Ninja.introHand], Phaser.Physics.ARCADE);
        var tween = this.add.tween(Ninja.introHand).to({ y: Ninja.ch - 115 }, 1500, Phaser.Easing.Linear.None, true, 1000, 1);
        tween.onComplete.add(function () {
            Ninja.Player.body.x -= 180;
            Ninja.introHand.destroy();
            Ninja.introHand = this.add.sprite((Ninja.cw * 0.1) + 110, Ninja.ch - 50, 'TapandHold');
            var tween2 = this.add.tween(Ninja.introHand).to({ y: Ninja.ch - 115 }, 1500, Phaser.Easing.Linear.None, true, 1000, 1).start();
            tween2.onComplete.add(function () {
                Ninja.Player.body.x += 40;
                Ninja.introHand.destroy();
                Ninja.introHand = g.add.sprite(Ninja.cw * 0.85 + 10, Ninja.ch - 50, 'TapandHold');
                var tween3 = g.add.tween(Ninja.introHand).to({ y: Ninja.ch - 115 }, 1500, Phaser.Easing.Linear.None, true, 1000, 1).start();
                tween3.onComplete.add(function () {
                    Ninja.Player.body.x += 70;
                });
            });

        }, this);
        Ninja.introText = this.game.add.text((Ninja.cw / 2) - 100, (Ninja.ch / 2) - 100, "Tap to go back", { font: "25px Arial", fill: "#FFFFFF", align: "center" });
        Ninja.introText.alpha = 0.3;

        this.game.input.onTap.addOnce(function () { this.state.start("MainMenu"); }, this);
    }
}