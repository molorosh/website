import React, { Component } from 'react';
import Phaser from 'phaser';
import './ThisIsNotAGame.css';

class ThisIsNotAGame extends Component {

    config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: this.preload,
            create: this.create
        }
    };

    game;

    preload ()
    {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }

    componentDidMount() {
        console.log("tinag.componentDidMount");  
        this.config.parent = "tehi_" + this.props.identifier;
        this.game = new Phaser.Game(this.config); 
    }

    componentWillUnmount() {
        console.log("tinag.componentWillUnmount");
    }

    render() {
        let div_id = "tehi_" + this.props.identifier;
        return (
            <div className="tinagMain" id={div_id}></div>
        );
    }

}

export default ThisIsNotAGame;

