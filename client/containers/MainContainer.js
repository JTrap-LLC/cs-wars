import React from 'react';
import UserInfo from '../components/UserInfo.js';
import ScoreBoard from '../components/ScoreBoard.js';

const MainContainer = (props) => {
  return (
    <div id='main-container'>
      <UserInfo
        codeWarsData={
          props.codeWarsData
        } /* Passes user info from DB (from state in App) */
      />
      <ScoreBoard />
    </div>
  );
};
export default MainContainer;
