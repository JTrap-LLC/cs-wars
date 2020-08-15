import React, { useState } from 'react';
import LoginContainer from './containers/LoginContainer';
import NavContainer from './containers/NavContainer';
import MainContainer from './containers/MainContainer';

const App = () => {
  // const [user, setUser] = useState('Rob');

  return (
    <div id='app'>
      <LoginContainer />
      <NavContainer />
      <MainContainer />
      <button></button>
    </div>
  );
};

export default App;
