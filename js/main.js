
 var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        }
    };


 var game = new Phaser.Game(config);

game.scene.add('Loader', loader);
game.scene.add('Preloader', preloader);
game.scene.add('OpeningMenu', menu);


game.scene.start('Preloader');