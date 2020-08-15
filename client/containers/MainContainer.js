import React from 'react';
import UserInfo from '../components/UserInfo.js';
import ScoreBoard from '../components/ScoreBoard.js';

const MainContainer = (props) => {
  return (
    <div id='main-container'>
      <UserInfo />
      <ScoreBoard />
    </div>
  );
};
export default MainContainer;
