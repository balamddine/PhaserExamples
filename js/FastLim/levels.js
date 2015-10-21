var levels = function (game) { };
var levelsGrp;
levels.prototype = {
    preload: function () {
        this.load.image("openlevel", "img/FastLim/level_open.png");
        this.load.image("locked", "img/FastLim/closedlvl0.png");
        
    },
    create: function () {
        this.CreateLevel(4,5);
      
      
    },
    update: function () {
       
        var storage = window.localStorage;
        var currentlvl = !storage.level ? 1 : storage.level;
        levelsGrp.forEach(function (lvl) {
            if (parseInt(lvl.name) <= currentlvl)
            {
                lvl.loadTexture("openlevel",0);
                lvl.inputEnabled = true;
                lvl.events.onInputDown.add(this.play, this);
                lvl.events.onInputOver.add(this.inputOver, this);
                lvl.events.onInputOut.add(this.inputOut, this);
                
            }
        },this);

    }, CreateLevel: function (row, col) {
        levelsGrp = this.add.group();
        var k = 1;
      
        for (i = 0; i < row; i++)
        {
            for (j = 0; j < col; j++)
            {
                var lvl = levelsGrp.create(j * 170, i * 130, 'locked');
                lvl.name = k;
                lvl.scale.setTo(0.7, 0.7);
                k++;
            }
        }  
        
    },
    inputOver: function () {
        this.game.canvas.style.cursor ="pointer";
    },
    inputOut: function () {
        this.game.canvas.style.cursor = "default";
    }, play: function (level) {
        this.loadLevel(level);
    },
    loadLevel: function (level)
    {
        var leveltoload = "level" + level.name;
        console.log(leveltoload);
        this.state.start(leveltoload);
       
    }
}