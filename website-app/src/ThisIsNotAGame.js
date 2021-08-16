import React, { Component } from 'react';
import './ThisIsNotAGame.css';

class ThisIsNotAGame extends Component {

    componentDidMount() {
        console.log("tinag.componentDidMount");    
    }

    componentWillUnmount() {
        console.log("tinag.componentWillUnmount");
    }

    render() {
        let div_id = "tehi_" + this.props.identifier;
        return (
            <div className="tinagMain" id={div_id}>
                <p className="fancy">I have written websites; web services; mobile apps; progressive web apps; high-performance databases; windows services; XML and JSON APIs; desktop applications; card-readers; real-time embedded software; image processors; and even one art installation.  But I have never written a game ... yet</p>
            </div>
        );
    }

}

export default ThisIsNotAGame;

