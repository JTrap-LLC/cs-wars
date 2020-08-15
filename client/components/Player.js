import React from 'react';

const Player = (props) => {
  return (
    <div className='player'>
      <div>
        <span>Username: </span>
        {props.username}
      </div>
      <div>
        <span>Rank Name: </span> {props.rankName}
      </div>
      <div>
        <span>Total Complete: </span>
        {props.totalCompleted}
      </div>
    </div>
  );
};

export default Player;
