import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './TheEyesHaveIt.css';
//import avatar from './avatar.svg'
import AvatarSvg from './AvatarSvg'

class TheEyesHaveIt extends Component {

    constructor(props){
        super(props);
        this.whenMouseMoveOccurs = this.whenMouseMoveOccurs.bind(this);
        this.redrawEllipse = this.redrawEllipse.bind(this);
    }

    getPosition(elementId) {
        let retVal = { x: undefined, y: undefined };
        // just hard-code it for now:
        retVal.x = 527;
        retVal.y = 446;
        var realDomElement = ReactDOM.findDOMNode(this);
        if(realDomElement){
            let descendant = realDomElement.querySelector('#' + elementId);
            if(descendant){
                let bounds = descendant.getBoundingClientRect();
                // just hard-code it for now:
                retVal.x = bounds.left;
                retVal.y = bounds.top;
            }
        }
        //console.log(retVal);
        return retVal;
    }

    redrawEllipse(pageX, pageY, frameElement, radiusH, radiusV, svgElement, xPos, yPos){
        let elem = document.getElementById(svgElement);
        let position = this.getPosition(frameElement);

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
      let debugLayout = "";
      if(this.props.debug){
          debugLayout = (
            <div>
              <pre>(TEHI: placeholder [{this.props.identifier}])</pre>
              <p>
                mouse:(x: <span id={x_id}>???</span>, 
                y: <span id={y_id}>???</span>)</p>
            </div>
          );
      }
      return (
          <div className="tehiMain" id={div_id}>
            {debugLayout}
            <p className="tehiPara"><AvatarSvg /></p>
          </div>
      );
  }

}

export default TheEyesHaveIt;

