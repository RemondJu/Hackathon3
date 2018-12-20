import React from 'react';
import { Row } from 'reactstrap';
import './Object.css'

const Object = (props) => (
  <Row className="Object">
    <img src="https://via.placeholder.com/150x80" alt="" />
    <p>Objet : {props.name}</p>
    <p>Type : {props.type}</p>
    <p>Consommation : {props.consumption} W</p>
  </Row>
)
 
export default Object;