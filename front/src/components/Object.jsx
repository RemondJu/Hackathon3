import React from 'react';
import { Row } from 'reactstrap';
import './Object.css'

const Object = (props) => (
  <Row className="Object">
    <img src="https://via.placeholder.com/150x80" alt="" />
    <p>{props.name}</p>
    <p>{props.type}</p>
    <p>{props.consumption}</p>
  </Row>
)
 
export default Object;