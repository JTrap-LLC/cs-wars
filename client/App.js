import React, { useState, useEffect } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  const [user, setUsername] = useState('Alonsog66'); // Codewars Username
  const [userInfo, setUserInfo] = useState([]); // User info from DB

  useEffect(() => {
    fetch(`/user/${user}`) // need to get from login
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
          <NavContainer
            username={
              userInfo[0].cwusername
            } /* Passes the codewars username from userInfo state object */
          />
          <MainContainer
            codeWarsData={JSON.stringify(
              userInfo[0]
            )} /* Passes user info from DB */
          />
        </div>
      )}
    </div>
  );
};

export default App;
