import React from 'react';
import { Col, Row } from 'reactstrap';
import Object from '../components/Object';
import { connect } from 'react-redux';
import '../components/MyRooms.css'  
import { roomClick } from '../actions'
import { bindActionCreators } from 'redux';

const MyRooms = (props) => (
  <div className="MyRooms">
    <Row className="roomsRow">
      <Col sm="2" className="roomsSide">
        {props.roomList.map((room, index) => {
          return (
            <button key={room.id} type="button" className="room" onClick={() => props.roomClick(index)} name={room.type}>
              {room.name}
            </button>
          );
        })}
      </Col>
      <Col className="text-center mt-5">
        <h2 className="roomName">Salon</h2>
        <div className="objects">
          {props.roomObjects.map(object => {
            return(
              <Object
                key={object.id}
                name={object.name}
                type={object.type}
                consumption={object.consumption}
              />
            )
          })}
        </div>        
      </Col>      
    </Row>
  </div>
)

function mstp(state) {
  return {
    roomList: state.roomList,
    roomObjects: state.roomObjects,
  }
}

function mdtp(dispatch){
  return bindActionCreators({
    roomClick
  }, dispatch)
}
 
export default connect(mstp, mdtp)(MyRooms);