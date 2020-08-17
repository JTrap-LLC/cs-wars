import React, { useState, useEffect } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  const [user, setUsername] = useState(''); // Codewars Username
  const [userInfo, setUserInfo] = useState([]); // User info from DB
  const [userChallenges, setUserChallenges] = useState([]); 
  const [isLoggedin, setLogin] = useState(false);

  useEffect(() => {
    fetch(`/user/${user}`) // need to get from login
      .then((resp) => resp.json())
      .then((resp) => {
        setUserInfo([resp]);
        setLogin(!isLoggedin);
      })
      .catch((e) => {
        return e;
      });
  }, [user]);
  
  useEffect(() => {
    fetch(`/challenges/${user}`) // need to get from login
      .then((resp) => resp.json())
      .then((resp) => {
        setUserChallenges(resp);
        console.log('challenges', resp)
      })
      .catch((e) => {
        return e;
      });
  }, [user]);

  return (
    <div id='app'>
      {!isLoggedin ? (
        <LoginContainer
          setUsername={setUsername} /* renders if we are NOT logged in */
        />
      ) : (
        <div>
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
                userChallenges={userChallenges}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
