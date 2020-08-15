import React, { useState, useEffect } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  const [user, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState([]);
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

  useEffect(() => {
      fetch(
        'https://www.codewars.com/api/v1/users/sull364', {
          headers: {
            Authorization: 'qfkQ9s6yV1sAic6RhoKN'
          }
        }
      )
      .then(response => response.json())
      // const data =  result.json();
      .then(data => {
        console.log('HEY I AM THE FETCH RESULTS: ', data);
        setUserInfo(data)
      })
      .catch(err => console.log('Logged err:', err));
  }, []);

  return (
    <div id='app'>
      <LoginContainer setUsername={setUsername} />
      <NavContainer username={codeWarsData.username} />
      <MainContainer codeWarsData={JSON.stringify(codeWarsData)} />
    </div>
  );
};

export default App;
