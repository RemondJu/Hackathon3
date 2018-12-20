import React, { Component } from 'react';
import { Row } from 'reactstrap';
import './Object.css';

class ObjectInRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      objectDivClass: 'hidden',
     }
     this.toggleInfos = this.toggleInfos.bind(this);
  }

  toggleInfos(){
    if(this.state.objectDivClass === 'hidden'){
      this.setState({
        objectDivClass: 'show',
      })
    } else {
      this.setState({
        objectDivClass: 'hidden',
      })
    }
  }

  render() { 
    return ( 
      <div className="Object" onClick={() => this.toggleInfos()}>
        <Row className="objectRow mr-1 ml-0">
          <img src="https://via.placeholder.com/150x50" alt="placeholdimage" />
          <p><strong>Objet : </strong>{this.props.name}</p>
          <p><strong>Type : </strong>{this.props.type}</p>
          <p><strong>Consommation : </strong> {this.props.consumption} W</p>
          <input type="image" id="image" alt="Login" width="80px" height="50%"
       src="https://static.thenounproject.com/png/1432570-200.png"/>
        </Row>
        <div className={this.state.objectDivClass}>{this.props.description}</div>
      </div>
     );
  }
}
 
export default ObjectInRoom;