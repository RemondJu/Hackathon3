import React from 'react';
import { connect } from 'react-redux';

const MyHome = (props) => (
  <div className="MyHome">
    <h2>My rooms</h2>
    <ul>
      {props.objectsList.map(objectEl => {
        return(
          <li key={objectEl.id}>{objectEl.name} | consommation électrique : {objectEl.consumption} W</li>
        )
      })}
    </ul>
  </div>
)

function mstp(state) {
  return{
    objectsList: state.room1Objects,
  }
}
 
export default connect(mstp)(MyHome);
