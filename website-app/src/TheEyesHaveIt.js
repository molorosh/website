import React, { Component } from 'react';
import './TheEyesHaveIt.css';
//import avatar from './avatar.svg'
import AvatarSvg from './AvatarSvg'

class TheEyesHaveIt extends Component {

    constructor(props){
        super(props);
        this.whenMouseMoveOccurs = this.whenMouseMoveOccurs.bind(this);
        this.redrawEllipse = this.redrawEllipse.bind(this);
    }

    getPosition(el) {
        // recurse through all parents, cumulating x & y:
        for (
            var lx=0, ly=0;
             el != null;
             lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent){
                 console.log({lx: lx, ly: ly});
             };
        return {x: lx,y: ly};
    }

    redrawEllipse(pageX, pageY, frameElement, radiusH, radiusV, svgElement, xPos, yPos){
        console.log({pageX: pageX, pageY: pageY});
        let frame = document.getElementById(frameElement);
        let elem = document.getElementById(svgElement);
        let position = this.getPosition(frame);
        console.log(position);
        let mouseX = Math.round(pageX - position.x);
        let mouseY = Math.round(pageY - position.y);
        
        var newMouseX = mouseX;
        var newMouseY = mouseY;
        
        let diffX = xPos - mouseX;
        let diffY = yPos - mouseY;
        
        let ellipseBoundaryTest = 
            ((Math.pow((mouseX - xPos), 2)) / Math.pow((2 * radiusH),2))
            + ((Math.pow((mouseY - yPos), 2)) / Math.pow((2 * radiusV),2))
        
        var angleInRadians = Math.atan2(diffY, diffX);
        if(ellipseBoundaryTest <= 1){
            newMouseX = mouseX;
            newMouseY = mouseY;
        }else{
            newMouseX = xPos + (2 * radiusH * Math.cos(Math.PI + angleInRadians));
            newMouseY = yPos + (2 * radiusV * Math.sin(Math.PI + angleInRadians));
        }
        
        elem.setAttribute('cx', newMouseX);
        elem.setAttribute('cy', newMouseY);
    }

    whenMouseMoveOccurs(x, y){  
        var elem_xcoord = document.getElementById("tehi_" + this.props.identifier + "_xcoord");
        var elem_ycoord = document.getElementById("tehi_" + this.props.identifier + "_ycoord");
        if(elem_xcoord){
            elem_xcoord.innerHTML = x;
        }
        if(elem_ycoord){
            elem_ycoord.innerHTML = y;
        }
        // do the eye moving stuff...
        this.redrawEllipse(x, y, "svg003", 2.5, 1.25, "svgCircle05", 132.5, 97.5);
		this.redrawEllipse(x, y, "svg003", 2.5, 1.25, "svgCircle06", 83.5, 97.5);
    }

    componentDidMount() {
        window.MouseMoveEventNames.push(this.props.identifier);
        window.MouseMoveEventCallbacks[this.props.identifier] = this.whenMouseMoveOccurs;
  }

  componentWillUnmount() {
    var index = -1;
    if(window.MouseMoveEventNames 
        && window.MouseMoveEventNames.length){
        for(
            var x = 0, xMax = window.MouseMoveEventNames.length;
            x < xMax;
            x++)
        {
            if(window.MouseMoveEventNames[x] === this.props.identifier){
                index = x;
                break;
            }
        }
    }
    if(index > -1){
        window.MouseMoveEventNames.splice(index, 1);
    }
  }

  render() {
      let div_id = "tehi_" + this.props.identifier;
      let x_id = "tehi_" + this.props.identifier + "_xcoord";
      let y_id = "tehi_" + this.props.identifier + "_ycoord";
      return (
          <div className="tehiMain" id={div_id}>
            <script type="text/javascript">
                
            </script>
              <pre>(TEHI: placeholder [{this.props.identifier}])</pre>
              <p>
                mouse:(x: <span id={x_id}>???</span>, 
                y: <span id={y_id}>???</span>)</p>
              <p><AvatarSvg /></p>
          </div>
      );
  }

}

export default TheEyesHaveIt;

