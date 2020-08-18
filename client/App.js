import React, { useState, useEffect } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';
import CollectCWUsername from './components/CollectCWUsername';

// Should probly do some research on your react hooks fellas ¯\(;_')/¯

const App = () => {
  const [facebookid, setFacebookid] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUsername] = useState(''); // Codewars Username
  const [userInfo, setUserInfo] = useState([]); // User info from DB
  const [userChallenges, setUserChallenges] = useState([]);
  const [isLoggedin, setLogin] = useState(false);
  const [isCollecting, setCollecting] = useState(false);
  const [cwuser, setcwUsername] = useState(''); // Codewars Username
  const [closure, setClosure] = useState(false); // Just makes sure that the post request only runs once

  // Fetch request to get valid user
  useEffect(() => {
    if (facebookid.length) {
      fetch(`/user/${facebookid}`) // the params we use to load the page
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.err) return setCollecting(!isCollecting);
          setUserInfo([resp]);
          setLogin(true);
        })
        .catch((e) => {
          console.log('AHHH', e);
          return;
        });
    }
  }, [facebookid]);

  // Fetch request to create user
  useEffect(() => {
    if (cwuser.length) {
      if (!closure) {
        setClosure(!closure);
        fetch(`/user/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            facebookid,
            cwUsername: cwuser,
            firstName: firstName,
            lastName: lastName,
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
    }
  });

  // Fetch request to get challenges for user
  useEffect(() => {
    if (userInfo.length) {
      fetch(`/challenges/${userInfo[0].cwusername}`) // need to get from login
        .then((resp) => resp.json())
        .then((resp) => {
          setUserChallenges(resp);
        })
        .catch((e) => {
          return e;
        });
    }
  }, [userInfo]);

  return (
    <div id='app'>
      {!isLoggedin ? (
        <div className='main-container'>
          {isCollecting ? (
            <div>
              <CollectCWUsername setcwUsername={setcwUsername} />
            </div>
          ) : (
              <LoginContainer
                setUsername={setUsername} /* renders if we are NOT logged in */
                setFacebookid={setFacebookid}
                setFirstName={setFirstName}
                setLastName={setLastName}
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
                    name={`${firstName} ${lastName}`}
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
