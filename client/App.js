import React, { useState, useEffect } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  const [facebookid, setFacebookid] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUsername] = useState(''); // Codewars Username
  const [userInfo, setUserInfo] = useState([]); // User info from DB
  const [isLoggedin, setLogin] = useState(false);

  useEffect(() => {
    fetch(`/user/${facebookid}`) // the params we use to load the page
      .then((resp) => resp.json())
      .then((resp) => {
        setUserInfo([resp]);
        setLogin(true);
      })
      .catch((e) => {
        setLogin(false);
        // we want some logic to go to a 'signup' page to get codewars username (where the 'createuser' endpt will live)
        return e;
      });
  }, [facebookid]);

  return (
    <div id='app'>
      {!isLoggedin ? (
        <LoginContainer
          setUsername={setUsername} /* renders if we are NOT logged in */
          setFacebookid={setFacebookid}
          setFirstName={setFirstName}
          setLastName={setLastName}
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
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
