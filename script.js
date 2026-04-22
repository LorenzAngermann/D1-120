class Scene1 extends Phaser.Scene{
    constructor(){
        super('Scene1');
    }

    preload(){
        this.load.image('orchid', 'images/orchid.png');
        this.load.audio('swoosh', 'music/swoosh.mp3');

    }


    create(){
        const orchid = this.add.image(400, 300, 'orchid')
        .setOrigin(0.5)
        .setAlpha(0);


        this.tweens.add({
            targets: orchid,
            alpha:1,
            ease: 'EaseIn',
            duration:1000,
            delay:1000
        })

        this.sound.play('swoosh');

        this.tweens.add({
            targets: orchid,
            alpha:0,
            ease: 'EaseIn',
            duration:1000,
            delay:3000
        })
        this.time.delayedCall(3000, () => {
            this.scene.start('Scene2');
            });
        
    }

    update(){}
};


class Scene2 extends Phaser.Scene{
    constructor(){
        super('Scene2');
    }

    preload(){
        this.load.image('background', 'images/background.png');
        this.load.audio('music', 'music/backgroundmusic.mp3');
    }
    create(){
        const background = this.add.image(0, 0, 'background')
        .setDisplaySize(800, 600)
        .setOrigin(0,0)
        .setAlpha(0);

        const menu = this.add.text(400,300, 'Menu', {
            fontSize: '40px',
            color: '#ffffff'
        })
        .setAlpha(0)
        .setOrigin(.5);

        this.sound.play('music');
        
        this.tweens.add({
            targets: [background, menu],
            alpha:1,
            ease: 'Linear',
            duration:1500,
            delay:0
        });
        this.tweens.add({
            targets: [background, menu],
            alpha:0,
            ease: 'Linear',
            duration:1500,
            delay:5500
        });

        const bar = this.add.graphics();
        bar.fillStyle(0x212121, 1);
        bar.fillRect(0, 0, 75, 600);





        this.time.delayedCall(7000, () => {
            this.scene.start('Scene3');
            });
    }


    update(){}

};

class Scene3 extends Phaser.Scene{
    constructor(){
        super('Scene3');
    }
    preload(){

    }
    create(){
        const gametext = this.add.text(400,300, 
            'In a world where there are games... \nThere was a game\nBut it wasnt here'
            ,{
            fontSize: '35px',
            color: '#ffffff'
        })
        .setAlpha(0)
        .setOrigin(.5);


        this.tweens.add({
            targets: [gametext],
            alpha:1,
            ease: 'Linear',
            duration:1500,
            delay:500
        });

        const circle = this.add.graphics();
        circle.fillStyle(0x212121, 1);
        circle.fillCircle(0, 550, 50);


        this.tweens.add({
            targets: [circle],
            ease: 'Linear',
            duration:5000,
            x:800
        });
    }
    


    update(){}
}


const config = {

type: Phaser.AUTO,
width: 800,
height: 600,
scene: [Scene1,Scene2,Scene3],
backgroundColor:'#000000'

};

const game = new Phaser.Game(config);