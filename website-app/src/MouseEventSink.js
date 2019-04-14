import React, { Component } from 'react';

class MouseEventSink extends Component {

    constructor(props){
        console.log("MouseEventSink::constructor()");
        super(props);
    }

    componentDidMount() {
        console.log("MouseEventSink::componentDidMount()");
        window.MouseEventCallbacks = [];
        window.onmousemove = (e) => {
            //console.log("(" + e.clientX + ", " + e.clientY + ")")
            var elem_xcoord = document.getElementById("mse_xcoord");
            var elem_ycoord = document.getElementById("mse_ycoord");
            if(elem_xcoord){
                elem_xcoord.innerHTML = e.clientX;
            }
            if(elem_ycoord){
                elem_ycoord.innerHTML = e.clientY;
            }
        };
    }

    componentWillUnmount() {
        console.log("MouseEventSink::componentWillUnmount()");
        window.MouseEventCallbacks = undefined;
    }

    render(){
        return(
            <div className="mouseEventSink">
                <p>
                    <code>MouseEventSink mouse:(x:<span id="mse_xcoord">???</span>, y: <span id="mse_ycoord">???</span>)</code>
                </p>
            </div>
        );
    }

}

export default MouseEventSink;

