import React, { useState, useEffect } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  const [user, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    // const userName = 'sull364'; // needs to come from server; user logs in and username is served to front end
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/', // this needs to move to the back end
    //   targetUrl = `https://www.codewars.com/api/v1/users/${userName}`; //move to back end

    fetch(`/user/sull364`) // need to get from login
      .then((resp) => resp.json())
      .then((resp) => {
        setUserInfo([resp]);
        console.log('THIS IS THE RESULT: ', resp);
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
          {/* <NavContainer username={userInfo[0].username} />
          <MainContainer codeWarsData={JSON.stringify(userInfo[0])} /> */}
        </div>
      )}
    </div>
  );
};

export default App;
