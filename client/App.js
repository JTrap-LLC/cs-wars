import React, { useState } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div id='app'>
      <LoginContainer setUsername={setUsername} />

      <NavContainer />
      <MainContainer />
    </div>
  );
};

export default App;
