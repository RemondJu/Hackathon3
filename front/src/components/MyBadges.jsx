import React from 'react';
import './MyBadges.css';
import { connect } from 'react-redux';
import Badge from './Badge';

const MyBadges = (props) => (
  <div className="MyBadges">
    <h2>My badges</h2>
    <div className="badges">
      {props.badgesList.map(badge => {
        return(
          <Badge 
            name={badge.name}
            progress={badge.progress}
          />
        )
      })}
    </div>
    
  </div>
) 

function mstp(state) {
  return{
    badgesList: state.badgesList,
  }
}
 
export default connect(mstp)(MyBadges);
