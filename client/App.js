import React, { useState, useEffect } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  const [user, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const userName = 'sull364';
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = `https://www.codewars.com/api/v1/users/${userName}`;
    fetch(proxyUrl + targetUrl)
      .then((resp) => resp.json())
      .then((resp) => {
        setUserInfo([resp]);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  return (
    <div id='app'>
      <LoginContainer setUsername={setUsername} />

      {!userInfo.length ? (
        <div></div>
      ) : (
        <div>
          <NavContainer username={userInfo[0].username} />
          <MainContainer codeWarsData={JSON.stringify(userInfo[0])} />
        </div>
      )}
    </div>
  );
};

export default App;
