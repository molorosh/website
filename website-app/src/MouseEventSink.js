import React, { Component } from 'react';

class MouseEventSink extends Component {

    componentDidMount() {
        window.MouseMoveEventNames = [];
        window.MouseMoveEventCallbacks = {};
        window.onmousemove = (e) => {
            if(this.props.debug)
            {
                var elem_xcoord = document.getElementById("mse_xcoord");
                var elem_ycoord = document.getElementById("mse_ycoord");
                if(elem_xcoord){
                    elem_xcoord.innerHTML = e.clientX;
                }
                if(elem_ycoord){
                    elem_ycoord.innerHTML = e.clientY;
                }
            }
            // pass the mouse co-ordinates to the callbacks
            if(window.MouseMoveEventNames 
                && window.MouseMoveEventNames.length){
                for(
                    var x = 0, xMax = window.MouseMoveEventNames.length;
                    x < xMax;
                    x++)
                {
                    var mover = window.MouseMoveEventNames[x];
                    window.MouseMoveEventCallbacks[mover](
                        e.clientX,
                        e.clientY
                    )
                }
            }
        };
    }

    componentWillUnmount() {
        window.MouseMoveEventNames = undefined;
        window.MouseMoveEventCallbacks = undefined;
    }

    render(){
        let debugLayout = "";
        if(this.props.debug){
            debugLayout = (<p>
                <code>MouseEventSink mouse:(x:<span id="mse_xcoord">???</span>, y: <span id="mse_ycoord">???</span>)</code>
            </p>);
        }
        return(
            <div className="mouseEventSink">
                {debugLayout}
            </div>
        );
    }

}

export default MouseEventSink;

