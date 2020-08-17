import React, { useState, useEffect } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';
import CollectCWUsername from './components/CollectCWUsername';

const App = () => {
  const [user, setUsername] = useState(''); // Codewars Username
  const [userInfo, setUserInfo] = useState([]); // User info from DB
  const [isLoggedin, setLogin] = useState(false);
  const [isCollecting, setCollecting] = useState(false);
  const [cwuser, setcwUsername] = useState(''); // Codewars Username

  // Fetch request to get valid user
  useEffect(() => {
    console.log(user);
    fetch(`/user/${user}`) // need to get from login
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setUserInfo([resp]);
        setLogin(!isLoggedin);
      })
      .catch((e) => {
        setCollecting(!isCollecting);
        return e;
      });
  }, [user]);

  // Fetch request to create user
  useEffect(() => {
    if (cwuser.length) {
      console.log('cwuser');
      fetch(`/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cwUsername: cwuser,
          firstName: 'Jane',
          lastName: 'Doe',
        }),
      }) // need to get from login
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          setUserInfo([resp]);
          setLogin(!isLoggedin);
        })
        .catch((e) => {
          console.log('Invalid CW username');
          return e;
        });
    }
  }, [cwuser]);

  return (
    <div id='app'>
      {!isLoggedin ? (
        <div>
          {!isCollecting ? (
            <div>
              <CollectCWUsername setUsername={setcwUsername} />
            </div>
          ) : (
            <LoginContainer
              setUsername={setUsername} /* renders if we are NOT logged in */
            />
          )}
        </div>
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
