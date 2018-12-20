import React from 'react';
import './MyBadges.css';
import { connect } from 'react-redux';
import Badge from './Badge';

const MyBadges = (props) => (
  <div className="MyBadges">
    {props.badgesList.map(badge => {
      return(
        <Badge 
          name={badge.name}
          progress={badge.progress}
          pic={badge.progress === 100 ? badge.unlockedImage : badge.lockedImage}
        />
      )
      
    })}
  </div>
) 

function mstp(state) {
  return{
    badgesList: state.badgesList,
  }
}
 
export default connect(mstp)(MyBadges);
