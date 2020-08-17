import React from 'react';
import UserInfo from '../components/UserInfo.js';
import ScoreBoard from '../components/ScoreBoard.js';

const MainContainer = (props) => {
  return (
    <div id='main-container'>
      <UserInfo
        name={props.name}
        codeWarsData={
          props.codeWarsData
        } /* Passes user info from DB (from state in App) */
        userChallenges={props.userChallenges}
      />
      <ScoreBoard />
    </div>
  );
};
export default MainContainer;
