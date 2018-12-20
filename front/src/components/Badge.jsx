import React from 'react';

const Badge = (props) => (
  <div className="badge">
    <h2>{props.name}</h2>
    <p>Badge description</p>
    <p>{props.progress}</p>
    <img width= "70px" src={props.pic} alt="badge icon" />
    <div className="maxProgress">
      <div className="currentProgress"></div>
    </div>
  </div>
)
 
export default Badge;