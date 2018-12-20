import React from 'react';
import { Col, Row } from 'reactstrap';
import Object from './Object';
import { connect } from 'react-redux';
import './MyRooms.css'


const MyRooms = (props) => (
  <div className="MyRooms">
    <Row className="roomsRow">
      <Col sm="2" className="roomsSide">
        {props.roomList.map(room => {
          return (
            <button type="button" className="room">
              {room.name}
            </button>
          );
        })}
      </Col>
      <Col className="text-center mt-5">
        <h2 className="roomName">Salon</h2>
        <div className="objects">
          {props.room1Objects.map(object => {
            return(
              <Object
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
    room1Objects: state.room1Objects,
  }
}
 
export default connect(mstp)(MyRooms);