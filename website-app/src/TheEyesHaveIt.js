import React, { Component } from 'react';
import './TheEyesHaveIt.css';
import avatar from './avatar.svg'

class TheEyesHaveIt extends Component {

    constructor(props){
        super(props);
        this.whenMouseMoveOccurs = this.whenMouseMoveOccurs.bind(this);
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
              <p><img src={avatar} alt="avatar"/></p>
          </div>
      );
  }

}

export default TheEyesHaveIt;

