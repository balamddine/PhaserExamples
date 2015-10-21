Ninja.MainMenu = function (game) {

};
Ninja.MainMenu.prototype = {
    create: function () {
        var Highscore = window.localStorage.getItem('hiscore') ? window.localStorage.getItem('hiscore') : 0;
        this.add.tileSprite(0, 0, Ninja.cw, Ninja.ch, 'city').alpha = 0.3;
        var btn_startGame = this.add.text((Ninja.cw / 2) - 100, (Ninja.ch / 2) - 30, "- -  Play Game ", { font: "25px Arial", fill: "#FFFFFF", align: "center" });
        btn_startGame.inputEnabled = true;
        btn_startGame.events.onInputDown.add(this.StartGame, this);

        var btn_tutorial = this.add.text((Ninja.cw / 2) - 100, (Ninja.ch / 2) + 70, "- -  Tutorial ", { font: "25px Arial", fill: "#FFFFFF", align: "center" });
        btn_tutorial.inputEnabled = true;
        btn_tutorial.events.onInputDown.add(this.lanchTutorial, this);
        this.add.text(10, Ninja.ch * 0.1, "High Score :  " + Highscore, { font: "20px Arial", fill: "#FFFFFF", align: "center" });

        this.add.sprite(Ninja.cw / 2 - 100, Ninja.ch / 2 - 200, 'logo');
        this.add.text(Ninja.cw / 2 - 35, Ninja.ch / 2 - 180, "Speed Ninja", { font: "30px Arial italic", fill: "#32828D", align: "center" });
        this.add.sprite(Ninja.cw / 2 - 100, Ninja.ch - 40, "logo2");
        this.add.text(Ninja.cw / 2 - 75, Ninja.ch - 30, "Powerd by : @Bs Game Production...", { font: "15px Arial", fill: "#FFFFFF", align: "center" });
    },
    StartGame: function () {
        this.state.start('Game');
    },
    lanchTutorial: function () {

        this.state.start('Tutorial');
    }
};