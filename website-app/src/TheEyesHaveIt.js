import React, { Component } from 'react';
import './TheEyesHaveIt.css';
import avatar from './avatar.svg'

class TheEyesHaveIt extends Component {

    constructor(props){
        console.log("TheEyesHaveIt::constructor()");
        super(props);
        this.whenMouseMoveOccurs = this.whenMouseMoveOccurs.bind(this);
    }

    whenMouseMoveOccurs(e){
        console.log("TheEyesHaveIt::whenMouseMoveOccurs()");
    }

    componentDidMount() {
        console.log("TheEyesHaveIt::componentDidMount()");
        
/*
    window.onmousemove = (e) => {
        if(this.props && this.props.identifier){
            let fragment = this.props.identifier;
            
            console.log("fragment:" + fragment)
            console.log("(" + e.clientX + ", " + e.clientY + ")")
            var elem_xcoord = document.getElementById("tehi_" + this.props.identifier + "_xcoord");
            var elem_ycoord = document.getElementById("tehi_" + this.props.identifier + "_ycoord");
            if(elem_xcoord){
                elem_xcoord.innerHTML = e.clientX;
            }
            if(elem_ycoord){
                elem_ycoord.innerHTML = e.clientY;
            }
        }
    };
*/

  }

  componentWillUnmount() {
    console.log("tehi.componentWillUnmount()");
  }

  render() {
      console.log("tehi.render()");
      let div_id = "tehi_" + this.props.identifier;
      let x_id = "tehi_" + this.props.identifier + "_xcoord";
      let y_id = "tehi_" + this.props.identifier + "_ycoord";
      return (
          <div className="tehiMain" id={div_id}>
              <pre>(TEHI: placeholder [{this.props.identifier}])</pre>
              <p>
                mouse:(x: <span id={x_id}>???</span>, 
                y: <span id={y_id}>???</span>)</p>
              <p><img src={avatar} alt="avatar"/></p>
          </div>
      );
  }

}

export default TheEyesHaveIt;

