var bootState = {
    preload: function () {
        game.load.image('progressBar', 'img/progressBar.png');
    },
    create: function () {
        this.fontLoad = game.add.text(game.world.centerX, game.world.centerY, " a ", { font: "200px", fill: "#fff", });
        this.fontLoad.visible = false;
        this.fontLoad.font = 'zero';
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
        game.scale.parentIsWindow = true;
        game.scale.refresh();
        game.global.audio = true;
        game.state.start('load');
    },
},
loadState = {
    preload: function () {
        var progressBar = game.add.sprite(game.world.centerX, game.world.centerY, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        progressBar.width = 480;
        game.load.setPreloadSprite(progressBar);
        this.aaa = game.add.text(game.world.centerX, game.world.centerY + 10, ' ' + 'aaaa' + ' ', {});
        this.aaa.anchor.setTo(0.5);
        this.aaa.alpha = 0;
        this.aaa.cssFont = '70px zero';
        this.load.onFileComplete.add(this.updateLoadedPercentage, this);
        this.titolo = game.add.text(game.world.centerX, 300, "Loading...", { font: "20px zero", fill: "#fff" });
        this.titolo.anchor.setTo(0.5);
        this.titolo.smoothed = this.smusso;
        game.load.image('mod1', 'img/desktop/play.png');
        game.load.image('ball', 'img/desktop/bal.png');
        game.load.image('ball-emitter', 'img/desktop/ball-emitter.png');
        game.load.image('cerchio', 'img/cerchio.png');
        game.load.image('cp', 'img/desktop/cp.png');
        game.load.image('frec', 'img/desktop/freccia.png');
        game.load.image('pixel', 'img/desktop/px.png');
        game.load.image('shop-block', 'img/desktop/shop-block.png');
        if (navigator.userAgent.match(/Trident\/7\./)) { }
        else {
            game.load.audio('1', ['audio/mp3/1.mp3', 'audio/ogg/1.ogg']);
            game.load.audio('2', ['audio/mp3/2.mp3', 'audio/ogg/2.ogg']);
            game.load.audio('3', ['audio/mp3/3.mp3', 'audio/ogg/3.ogg']);
            game.load.audio('4', ['audio/mp3/4.mp3', 'audio/ogg/4.ogg']);
            game.load.audio('5', ['audio/mp3/5.mp3', 'audio/ogg/5.ogg']);
            game.load.audio('6', ['audio/mp3/6.mp3', 'audio/ogg/6.ogg']);
            game.load.audio('7', ['audio/mp3/7.mp3', 'audio/ogg/7.ogg']);
            game.load.audio('8', ['audio/mp3/8.mp3', 'audio/ogg/9.ogg']);
            game.load.audio('9', ['audio/mp3/9.mp3', 'audio/ogg/9.ogg']);
            game.load.audio('10', ['audio/mp3/10.mp3', 'audio/ogg/10.ogg']);
            game.load.audio('11', ['audio/mp3/11.mp3', 'audio/ogg/11.ogg']);
            game.load.audio('12', ['audio/mp3/12.mp3', 'audio/ogg/12.ogg']);
            game.load.audio('13', ['audio/mp3/13.mp3', 'audio/ogg/13.ogg']);
            game.load.audio('14', ['audio/mp3/14.mp3', 'audio/ogg/14.ogg']);
            game.load.audio('15', ['audio/mp3/15.mp3', 'audio/ogg/15.ogg']);
        }
        game.load.image('tab', 'img/desktop/tab3.png');
        game.load.image('titolo', 'img/titolo.png');
        game.load.image('linea', 'img/linea.png');
        game.load.image('px', 'img/px.png');
        game.load.image('esplosione', 'img/esplosione.png');
        game.load.image('pointBG', 'img/desktop/point-background.png');
        game.load.image('pointMENU', 'img/desktop/sfondo-menu-ball2.png');
        game.load.image('home', 'img/desktop/home.png');
        game.load.image('diamond', 'img/desktop/diamond2.png');
        game.load.spritesheet('audio', 'img/desktop/audio.png', 100, 100, 2);
        game.load.image('inizio', 'img/desktop/sfondi/inizio.png');
        game.load.image('montagne', 'img/desktop/sfondi/montagna-f.png');
        game.load.image('pacman', 'img/desktop/sfondi/pacman-f.png');
        game.load.image('sole', 'img/desktop/sfondi/sole-f.png');
        game.load.image('palazzi', 'img/desktop/sfondi/palazzi-f.png');
        game.load.image('rombo', 'img/desktop/sfondi/rombo.png');
        game.load.physics('physicsData', 'json/tab3.json');
    },
    updateLoadedPercentage: function () {
        GamePix.game.gameLoading(this.load.progress);
    },
    create: function () {
        GamePix.game.gameLoaded(function () {
            game.backgroundColor = '#fff';
            game.global.selezionatore = 1;
            game.state.start('menu');
        }, this);
    }
},
menuState = {
    create: function () {
        localStorage.setItem("diamanti", game.global.diamanti);
        game.stage.backgroundColor = '#1a1a1a';
        game.physics.startSystem(Phaser.Physics.P2JS);
        if (game.device.desktop)
        {
            this.smusso = false;
        } else
        {
            this.smusso = true;
        }
        this.titolo = game.add.text(game.world.centerX, 80, "ZERO", { font: "150px zero", fill: "#fff" });
        this.titolo.anchor.setTo(0.5);
        this.titolo.smoothed = this.smusso;
        this.linea = game.add.sprite(game.world.centerX - 2, 130, 'linea');
        this.linea.anchor.setTo(0.5);
        this.linea.scale.setTo(0.3);
        this.linea.width = 230;
        this.linea.alpha = 1;
        this.mod1 = game.add.sprite(game.world.centerX - 70, game.world.centerY, 'mod1');
        this.mod1.anchor.setTo(0.5);
        this.mod1.scale.setTo(1);
        game.time.events.add(1300, function () {
            this.mod1.inputEnabled = true;
        }, this);
        this.mod1.smoothed = this.smusso;
        this.shop = game.add.sprite(game.world.centerX + 120, game.world.centerY - 100, 'pointMENU');
        this.shop.anchor.setTo(0.5);
        this.shop.scale.setTo(1);
        game.time.events.add(1300, function () {
            this.shop.inputEnabled = true;
        }, this);
        this.shop.smoothed = this.smusso;
        this.diamanti = game.add.text(game.world.centerX + 154, game.world.centerY - 70, " " + game.global.diamanti + " ", { font: "30px", fill: "#fff", });
        this.diamanti.font = 'zero';
        this.diamanti.anchor.setTo(0.5);
        this.diamanti.alpha = 0.7;
        this.diamanti.smoothed = this.smusso;
        this.click = false;
        this.mod1.events.onInputDown.add(function () {
            this.go(this.mod1, 'play');
            this.click = true;
        }, this);
        this.shop.events.onInputDown.add(function () {
            this.go(this.shop, 'shop');
            this.click = true;
        }, this);
        this.lineaCP = game.add.sprite(game.world.centerX, 630, 'linea');
        this.lineaCP.anchor.setTo(0.5);
        this.lineaCP.scale.setTo(0.3);
        this.lineaCP.tint = 0xFFFFFF;
        this.lineaCP.width = 230;
        this.lineaCP.smoothed = this.smusso;
        this.design = game.add.text(game.world.centerX - 47, 650, "DESIGN-CODE:", { font: "30px", fill: "#fff", });
        this.design.font = 'zero';
        this.design.anchor.setTo(0.5);
        this.design.alpha = 0.3;
        this.design.smoothed = this.smusso;
        this.cp = game.add.text(game.world.centerX, 680, "SAMUELE SCIACCA", { font: "40px", fill: "#fff", });
        this.cp.font = 'zero';
        this.cp.anchor.setTo(0.5);
        this.cp.smoothed = this.smusso;
        this.tab = game.add.sprite(game.world.centerX - 70, game.world.centerY, 'tab');
        this.tab.anchor.setTo(0.5);
        this.tab.scale.setTo(1);
        this.tab.pivot.y = -115;
        game.add.tween(this.tab).to({ angle: 360 }, 7000, "Linear", true, 0, 0, false).loop(true);
        this.audio = game.add.sprite(game.world.centerX - 170, game.world.centerY - 160, 'audio');
        this.audio.anchor.setTo(0.5);
        if (game.global.audio == true) {
            this.audio.frame = 1;
        } else {
            this.audio.frame = 0;
        }
        this.audio.inputEnabled = true;
        this.audio.events.onInputDown.add(function () {
            if (this.audio.frame == 0) {
                this.audio.frame = 1;
                game.global.audio = true;
            } else {
                this.audio.frame = 0;
                game.global.audio = false;
            }
        }, this);
        this.audioStart = game.add.audio(game.rnd.integerInRange(0, 15));
        this.audioStart.volume = 1;
        if (game.device.desktop) {
            this.cursore = game.input.keyboard.createCursorKeys();
            this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.s = game.input.keyboard.addKey(Phaser.Keyboard.S);
            game.time.events.add(1200, function () {
                if (this.click == false) {
                    this.space.onDown.add(function () {
                        this.go(this.mod1, 'play'),
                        this.click = true;
                    }, this);
                    this.s.onDown.add(function () {
                        this.go(this.shop, 'shop'),
                        this.click = true;
                    }, this);
                }
            }, this);
            this.start = game.add.text(game.world.centerX - 70, 510, _ttGamepix.TEXT_START, { font: "25px", fill: "#fff", });
            this.start.font = 'zero';
            this.start.anchor.setTo(0.5);
            this.start.alpha = 0.3;
            this.start.smoothed = this.smusso;
            this.enter = game.add.text(game.world.centerX + 130, game.world.centerY + 10, _ttGamepix.TEXT_SHOP, { font: "25px", fill: "#fff", });
            this.enter.font = 'zero';
            this.enter.anchor.setTo(0.5);
            this.enter.alpha = 0.3;
            this.enter.smoothed = this.smusso;
        }
        this.esplosione = game.add.sprite(game.world.centerX, game.world.centerY, 'esplosione');
        this.esplosione.anchor.setTo(0.5);
        this.esplosione.scale.setTo(4);
        this.esplosione.alpha = true;
        this.finito = false;
        game.time.events.add(500, function () {
            game.add.tween(this.esplosione).to({ alpha: 0 }, 100, "Linear", true, 1000).start();
            var b = game.add.tween(this.esplosione.scale).to({ x: 0, y: 0 }, 600, "Linear").start();
            b.onComplete.add(function () {
                this.esplosione.scale.x = 0.1;
                this.esplosione.scale.y = 0.1;
                this.esplosione.alpha = 0;
                this.esplosione.visible = false;
            }, this);
        }, this);
        if (game.global.partita == true) {
            this.score = game.add.text(game.world.centerX + 120, 450, _ttGamepix.TEXT_SCORE + game.global.punteggio + " ", { font: "30px", fill: "#fff", });
            this.score.font = 'zero';
            this.score.anchor.setTo(0.5);
            this.score.smoothed = this.smusso;
            this.best_score = game.add.text(game.world.centerX + 145, 480, _ttGamepix.TEXT_BESTSCORE + game.global.best_punteggio + " ", { font: "30px", fill: "#fff", });
            this.best_score.font = 'zero';
            this.best_score.anchor.setTo(0.5);
            this.best_score.smoothed = this.smusso;
            if (game.global.punteggio >= game.global.best_punteggio) {
                game.global.best_punteggio = game.global.punteggio;
                this.best_score.text = _ttGamepix.TEXT_BESTSCORE + game.global.best_punteggio + " ";
            }
        }
    },
    go: function (tipo, dove) {
        if (this.click == false) {
            if (game.global.audio == true) {
                this.audioStart.play();
            }
            var a = game.add.tween(tipo.scale).to({ x: 1.02, y: 1.02 }, 70, "Linear", true, 0, 0, true);
            a.onComplete.add(function () {
                this.esplosione.visible = true;
                game.add.tween(this.esplosione).to({ alpha: 1 }, 100, "Linear").start();
                var b = game.add.tween(this.esplosione.scale).to({ x: 4, y: 4 }, 600, "Linear").start();
                b.onComplete.add(function () { game.state.start(dove); }, this);
            }, this);
        }
    },
    update: function () { },
},
playState = {
    create: function () {
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.stage.backgroundColor = '#1a1a1a';
        game.global.partita = true;
        this.scoreText = game.add.text(game.world.centerX, h / 8, "" + game.global.punteggio + "", { font: "150px zero", fill: "#fff" });
        this.scoreText.anchor.setTo(0.5);
        this.scoreText.smoothed = false;
        game.global.punteggio = 0;
        this.scoreText.text = game.global.punteggio;
        this.linea = game.add.sprite(game.world.centerX, h / 4.75, 'linea');
        this.linea.anchor.setTo(0.5); this.linea.scale.setTo(0.3);
        this.linea.alpha = 1;
        this.sfondo = game.add.sprite(game.world.centerX, game.world.centerY, game.global.sfondo[game.global.selezionatore]);
        this.sfondo.anchor.setTo(0.5);
        this.sfondo.scale.setTo(1);
        this.sfondo.alpha = 0.5;
        this.sfondo.smoothed = true;
        game.physics.p2.applyDamping = false;
        this.material1 = game.physics.p2.createMaterial();
        this.material2 = game.physics.p2.createMaterial();
        this.material3 = game.physics.p2.createMaterial();
        this.tab = game.add.sprite(game.world.centerX, game.world.centerY, 'tab');
        this.tab.anchor.setTo(0.5);
        this.tab.scale.setTo(1);
        game.physics.enable(this.tab, Phaser.Physics.P2JS, false);
        this.tab.body.clearShapes();
        this.tab.body.loadPolygon('physicsData', 'tab');
        this.tab.pivot.y = -120;
        this.tab.body.setMaterial(this.material1);
        this.palla = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
        this.palla.anchor.setTo(0.5);
        this.palla.scale.setTo(0.8);
        game.physics.enable(this.palla, Phaser.Physics.P2JS, false);
        this.palla.body.clearShapes();
        this.palla.body.addCircle(8, 0, 0);
        this.palla.body.setMaterial(this.material2);
        this.palla.body.static = false;
        this.diamante = game.add.sprite(game.world.centerX, game.world.centerY - 100, 'ball-emitter');
        this.diamante.anchor.setTo(0.5);
        game.physics.enable(this.diamante, Phaser.Physics.P2JS, false);
        this.diamante.body.setMaterial(this.material3);
        this.diamante.body.x = game.rnd.integerInRange(150, 330);
        this.diamante.body.y = game.rnd.integerInRange(270, 450);
        this.diamante.body.kinematic = true;
        game.time.events.add(1000, function () {
            this.tab.body.kinematic = true;
            game.physics.p2.gravity.y = 100;
            game.physics.p2.setImpactEvents(true);
            game.physics.p2.restitution = 1;
        }, this);
        this.emitter = game.add.emitter(0, 0, 10);
        this.emitter.makeParticles('diamond');
        this.emitter.gravity = 0;
        this.emitter.scale.setTo(0.5);
        this.emitter.alpha = 0.4;
        this.audioDiamante = game.add.audio('1');
        this.audioDiamante.volume = 1;
        this.audioGameOver = game.add.audio('15');
        this.audioGameOver.volume = 1;
        this.scoreTocco = 1;
        this.tab.body.onBeginContact.add(function () {
            game.physics.p2.restitution = 1;
            game.physics.p2.gravity.y = 0;
            if (this.scoreTocco == 1) {
                this.scoreTocco = 0;
                game.global.punteggio += 1;
                this.scoreText.text = game.global.punteggio;
                if (game.global.audio == true) {
                    this.audioStart = game.add.audio(game.rnd.integerInRange(1, 15));
                    this.audioStart.volume = 1;
                    this.audioStart.play();
                } game.time.events.add(300, function () {
                    this.scoreTocco = 1;
                }, this);
            }
        }, this);

        this.diamante.body.onBeginContact.add(function () {
            this.diamante.body.x = game.rnd.integerInRange(150, 330);
            this.diamante.body.y = game.rnd.integerInRange(270, 450);
            game.global.diamanti += 1;
            if (game.global.audio == true) {
                this.audioDiamante.play();
            }
            var a = game.add.tween(this.sfondo.scale).to({ x: 1.02, y: 1.02 }, 100, "Linear", false, 0, 0, true).start();
        }, this);

        this.esplosione = game.add.sprite(game.world.centerX, game.world.centerY, 'esplosione');
        this.esplosione.anchor.setTo(0.5);
        this.esplosione.scale.setTo(4);
        this.esplosione.alpha = true;
        game.time.events.add(500, function () {
            game.add.tween(this.esplosione).to({ alpha: 0 }, 100, "Linear", true, 1000).start();
            var b = game.add.tween(this.esplosione.scale).to({ x: 0, y: 0 }, 600, "Linear").start();
            b.onComplete.add(function () {
                this.esplosione.visible = false;
            }, this);
        }, this);
        this.mm = false;
        this.cursore = game.input.keyboard.createCursorKeys();
        if (game.device.desktop) {
            this.guida = game.add.text(game.world.centerX, 700, _ttGamepix.TEXT_HELPS, { font: "30px", fill: "#fff", });
            this.guida.font = 'zero';
            this.guida.anchor.setTo(0.5);
            this.guida.alpha = 0.3;
            this.guida.smoothed = false;
        } else
        {
            this.frecciaS = game.add.sprite(game.world.centerX - 120, game.world.centerY + 300, 'frec');
            this.frecciaS.anchor.setTo(0.5);
            this.frecciaS.scale.setTo(1);
            this.frecciaS.alpha = 0.5;
            this.frecciaD = game.add.sprite(game.world.centerX + 120, game.world.centerY + 300, 'frec');
            this.frecciaD.anchor.setTo(0.5);
            this.frecciaD.alpha = 0.5;
            this.frecciaD.scale.setTo(1);
            this.frecciaD.angle = 180;
        }
        game.physics.p2.createContactMaterial(this.material1, this.material2, { friction: 0, restitution: 1.0 });
        game.physics.p2.createContactMaterial(this.material3, this.material2, { friction: 0, restitution: -1 });
    },
    update: function () {
        this.tab.body.setZeroVelocity();
        if (game.input.activePointer.isDown) {
            this.sposta();
        }
        if (this.cursore.left.isDown) {
            this.tab.body.rotation += 0.045;
        } else
            if (this.cursore.right.isDown) {
                this.tab.body.rotation -= 0.045;
            }
        if (this.palla.body.y < 190 || this.palla.body.y > 530 || this.palla.body.x < 90 || this.palla.body.x > 400) {
            if (this.mm == false) {
                this.mm = true;
                if (game.global.audio == true) {
                    this.audioGameOver.play();
                }
                this.esplosione.visible = true;
                this.esplosione.x = this.palla.body.x;
                this.esplosione.y = this.palla.body.y;
                game.add.tween(this.esplosione).to({ alpha: 1 }, 100, "Linear").start();
                var a = game.add.tween(this.esplosione.scale).to({ x: 5, y: 5 }, 650, "Linear").start();
                a.onComplete.add(function () {
                    GamePix.game.ping('game_over', { level: 'main', score: game.global.punteggio });
                    game.state.start("menu");
                }, this);
            }
        }
    },
    sposta: function () {
        if (game.device.desktop) { }
        else {
            if (game.input.x < 280) {
                this.tab.body.rotation += 0.045;
            } else if (game.input.x > 280) {
                this.tab.body.rotation -= 0.045;
            }
        }
    },
    tocco: function (pallaX, pallaY, tabX, tabY) {
        if (this.tab.body.x > this.palla.body.x) { }
        if (this.tab.body.x < this.palla.body.x) { }
    },
    render: function ()
    {
        game.debug.body(this.tab);
    },
},
shopState = {
    create: function () {
        this.home = game.add.sprite(game.world.centerX, game.world.centerY + 280, 'home');
        this.home.anchor.setTo(0.5);
        this.home.scale.setTo(1);
        game.time.events.add(1200, function () {
            this.home.inputEnabled = true;
        }, this); this.home.smoothed = true;
        this.audioSblocca = game.add.audio('8');
        this.audioSeleziona = game.add.audio('2');
        if (game.global.audio == false) {
            this.audioSblocca.volume = 0;
            this.audioSeleziona.volume = 0;
        } else {
            this.audioSeleziona.volume = 1;
            this.audioSblocca.volume = 1;
        }
        this.click = false;
        this.home.events.onInputDown.add(function () {
            this.go(this.home, 'menu');
            this.click = true;
        }, this);
        this.diamanti = game.add.text(game.world.centerX, game.world.centerY - 330, " " + game.global.diamanti + " ", { font: "50px", fill: "#fff", });
        this.diamanti.font = 'zero';
        this.diamanti.anchor.setTo(0.5);
        this.diamanti.alpha = 0.7;
        this.diamanti.smoothed = true;
        if (game.device.desktop) {
            this.diamanti.smoothed = true;
        } else {
            this.diamanti.smoothed = false;
        }
        this.uno = game.add.sprite(game.world.centerX - 100, game.world.centerY - 200, 'inizio');
        this.uno.width = 170;
        this.uno.height = 170;
        this.uno.anchor.setTo(0.5);
        if (game.global.bloccatoInizio == false) {
            this.uno.alpha = 0.1;
        } else {
            this.uno.alpha = 1;
        }
        this.uno.inputEnabled = true;
        this.uno.events.onInputDown.add(function () {
            game.global.selezionatore = 1;
        }, this);
        if (game.global.bloccatoMontagne == false) {
            this.dueBloccato = game.add.sprite(game.world.centerX + 100, game.world.centerY - 200, 'shop-block');
            this.dueBloccato.anchor.setTo(0.5);
        }
        this.due = game.add.sprite(game.world.centerX + 100, game.world.centerY - 200, 'montagne');
        this.due.width = 170;
        this.due.height = 170;
        if (game.global.bloccatoMontagne == false) {
            this.due.alpha = 0;
        }
        else {
            this.due.alpha = 1;
        }
        this.due.anchor.setTo(0.5);
        this.due.inputEnabled = true;
        this.due.events.onInputDown.add(function () {
            if (game.global.bloccatoMontagne == false) {
                if (game.global.diamanti >= 10) {
                    this.audioSblocca.play();
                    this.dueBloccato.destroy();
                    game.global.diamanti -= 10;
                    this.diamanti.text = game.global.diamanti;
                    game.global.bloccatoMontagne = true;
                    this.due.alpha = 1;
                }
            } else {
                game.global.selezionatore = 2;
                this.audioSeleziona.play();
            }
        }, this);
        if (game.global.bloccatoPalazzi == false) {
            this.treBloccato = game.add.sprite(game.world.centerX - 100, game.world.centerY - 20, 'shop-block');
            this.treBloccato.anchor.setTo(0.5);
        }
        this.tre = game.add.sprite(game.world.centerX - 100, game.world.centerY - 20, 'palazzi');
        this.tre.width = 170;
        this.tre.height = 170;
        if (game.global.bloccatoPalazzi == false) {
            this.tre.alpha = 0;
        } else {
            this.tre.alpha = 1;
        }
        this.tre.anchor.setTo(0.5);
        this.tre.inputEnabled = true;
        this.tre.events.onInputDown.add(function () {
            if (game.global.bloccatoPalazzi == false) {
                if (game.global.diamanti >= 10) {
                    this.audioSblocca.play();
                    game.global.diamanti -= 10;
                    this.treBloccato.destroy();
                    this.diamanti.text = game.global.diamanti;
                    game.global.bloccatoPalazzi = true;
                    this.tre.alpha = 1;
                }
            }
            else {
                game.global.selezionatore = 3;
                this.audioSeleziona.play();
            }
        }, this);
        if (game.global.bloccatoMoon == false) {
            this.quattroBloccato = game.add.sprite(game.world.centerX + 100, game.world.centerY - 20, 'shop-block');
            this.quattroBloccato.anchor.setTo(0.5);
        }
        this.quattro = game.add.sprite(game.world.centerX + 100, game.world.centerY - 20, 'pacman');
        this.quattro.width = 170;
        this.quattro.height = 170;
        if (game.global.bloccatoMoon == false) {
            this.quattro.alpha = 0;
        }
        else {
            this.quattro.alpha = 1;
        }
        this.quattro.anchor.setTo(0.5);
        this.quattro.inputEnabled = true;
        this.quattro.events.onInputDown.add(function () {
            if (game.global.bloccatoMoon == false) {
                if (game.global.diamanti >= 10) {
                    this.audioSblocca.play();
                    game.global.diamanti -= 10;
                    this.quattroBloccato.destroy();
                    this.diamanti.text = game.global.diamanti;
                    game.global.bloccatoMoon = true;
                    this.quattro.alpha = 1;
                }
            }
            else {
                game.global.selezionatore = 4;
                this.audioSeleziona.play();
            }
        }, this);
        if (game.global.bloccatoRombo == false) {
            this.cinqueBloccato = game.add.sprite(game.world.centerX - 100, game.world.centerY + 160, 'shop-block');
            this.cinqueBloccato.anchor.setTo(0.5);
        }
        this.cinque = game.add.sprite(game.world.centerX - 100, game.world.centerY + 160, 'rombo');
        this.cinque.width = 170;
        this.cinque.height = 170;
        if (game.global.bloccatoRombo == false) {
            this.cinque.alpha = 0;
        }
        else {
            this.cinque.alpha = 1;
        }
        this.cinque.anchor.setTo(0.5);
        this.cinque.inputEnabled = true;
        this.cinque.events.onInputDown.add(function () {
            if (game.global.bloccatoRombo == false) {
                if (game.global.diamanti >= 10) {
                    this.audioSblocca.play();
                    this.cinqueBloccato.destroy();
                    game.global.diamanti -= 10;
                    this.diamanti.text = game.global.diamanti;
                    game.global.bloccatoRombo = true;
                    this.cinque.alpha = 1;
                }
            }
            else {
                game.global.selezionatore = 5;
                this.audioSeleziona.play();
            }
        }, this);
        if (game.global.bloccatoMare == false) {
            this.seiBloccato = game.add.sprite(game.world.centerX + 100, game.world.centerY + 160, 'shop-block');
            this.seiBloccato.anchor.setTo(0.5);
        }
        this.sei = game.add.sprite(game.world.centerX + 100, game.world.centerY + 160, 'sole');
        this.sei.width = 170;
        this.sei.height = 170;
        if (game.global.bloccatoMare == false) {
            this.sei.alpha = 0;
        }
        else
        {
            this.sei.alpha = 1;
        }
        this.sei.anchor.setTo(0.5);
        this.sei.inputEnabled = true;
        this.sei.events.onInputDown.add(function () {
            if (game.global.bloccatoMare == false) {
                if (game.global.diamanti >= 10) {
                    this.audioSblocca.play();
                    game.global.diamanti -= 10;
                    this.seiBloccato.destroy();
                    this.diamanti.text = game.global.diamanti;
                    game.global.bloccatoMare = true;
                    this.sei.alpha = 1;
                }
            }
            else {
                game.global.selezionatore = 6;
                this.audioSeleziona.play();
            }
        }, this);
        this.select = game.add.sprite(0, 0, 'ball');
        this.esplosione = game.add.sprite(game.world.centerX, game.world.centerY, 'esplosione');
        this.esplosione.anchor.setTo(0.5);
        this.esplosione.scale.setTo(4);
        this.esplosione.alpha = true;
        game.time.events.add(500, function () {
            game.add.tween(this.esplosione).to({ alpha: 0 }, 100, "Linear", true, 1000).start();
            var b = game.add.tween(this.esplosione.scale).to({ x: 0, y: 0 }, 600, "Linear").start();
            b.onComplete.add(function () {
                this.esplosione.scale.x = 0.1;
                this.esplosione.scale.y = 0.1;
                this.esplosione.alpha = 0;
                this.esplosione.visible = false;
            }, this);
        }, this);
    },
    go: function (tipo, dove) {
        if (this.click == false) {
            var a = game.add.tween(tipo.scale).to({ x: 1.02, y: 1.02 }, 70, "Linear", true, 0, 0, true);
            a.onComplete.add(function () {
                this.esplosione.visible = true;
                game.add.tween(this.esplosione).to({ alpha: 1 }, 100, "Linear").start();
                var b = game.add.tween(this.esplosione.scale).to({ x: 4, y: 4 }, 600, "Linear").start();
                b.onComplete.add(function () { game.state.start(dove); }, this);
            }, this);
        }
    },
    update: function () {
        if (game.global.selezionatore == 1) {
            this.select.x = this.uno.x + 60;
            this.select.y = this.uno.y - 90;
        }
        if (game.global.selezionatore == 2) {
            this.select.x = this.due.x + 60;
            this.select.y = this.due.y - 90;
        }
        if (game.global.selezionatore == 3) {
            this.select.x = this.tre.x + 60;
            this.select.y = this.tre.y - 90;
        }
        if (game.global.selezionatore == 4) {
            this.select.x = this.quattro.x + 60;
            this.select.y = this.quattro.y - 90;
        } if (game.global.selezionatore == 5) {
            this.select.x = this.cinque.x + 60;
            this.select.y = this.cinque.y - 90;
        }
        if (game.global.selezionatore == 6) {
            this.select.x = this.sei.x + 60;
            this.select.y = this.sei.y - 90;
        }
    }
},
w = 480, h = 720,
game = new Phaser.Game(w, h, Phaser.AUTO, 'gameDiv');
game.state.add('boot', bootState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('load', loadState);
game.state.add('shop', shopState);
var diamanti = 0;
if (localStorage.getItem("diamanti") === null || localStorage.getItem("diamanti") == "NaN") {
    diamanti = 0;
}
else {
    diamanti = parseInt(localStorage.getItem("diamanti"));
}
game.global = {
    partita: false,
    best_punteggio: 0,
    punteggio: 0,
    sfondo: ['', 'inizio', 'montagne', 'palazzi', 'pacman', 'rombo', 'sole'],
    selezionatore: 1,
    diamanti: diamanti,
    bloccatoInizio: true,
    bloccatoMontagne: false,
    bloccatoPalazzi: false,
    bloccatoMoon: false,
    bloccatoRombo: false,
    bloccatoMare: false,
    audio: true,
};

game.state.start('boot');