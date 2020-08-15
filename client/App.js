import React, { useState } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  const [user, setUsername] = useState('');
  const codeWarsData = {
    username: 'Alonsog66',
    name: null,
    honor: 174,
    clan: null,
    leaderboardPosition: 158741,
    skills: null,
    ranks: {
      overall: {
        rank: -6,
        name: '6 kyu',
        color: 'yellow',
        score: 142,
      },
      languages: {
        javascript: {
          rank: -6,
          name: '6 kyu',
          color: 'yellow',
          score: 142,
        },
      },
    },
    codeChallenges: {
      totalAuthored: 0,
      totalCompleted: 24,
    },
  };

  return (
    <div id='app'>
      <LoginContainer setUsername={setUsername} />

      <NavContainer username={codeWarsData.username} />
      <MainContainer codeWarsData={JSON.stringify(codeWarsData)} />
    </div>
  );
};

export default App;
