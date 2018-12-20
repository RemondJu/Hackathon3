import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import DetailsHome from './DetailsHome';
import './MyHome.css';


const MyHome = (props) => (
  <div className="MyHome">
    <h2 className="title-h2-my-home">My rooms</h2>
    <Container>
      <Row>
        {props.roomList.map(room => {
          return (
            <Col md="4">
              <DetailsHome name={room.name} consumption={room.consumption} type={room.type} />
            </Col>
          )
        })}
      </Row>
    </Container>
  </div>
)

function mstp(state) {
  return{
    objectsList: state.objectsList,
    roomList: state.roomList,
  }
}
 
export default connect(mstp)(MyHome);