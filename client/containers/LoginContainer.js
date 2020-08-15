import React, { useState } from 'react';
import FacebookAuthorize from './fbAuthorize.js'


const LoginContainer = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id='login-container'>
      <form
        action=''
        value='Update'
        onSubmit={(e) => {
          e.preventDefault();
          props.setUsername(name);
          console.log(name);
        }}
      >
        <div>
          <label>User:</label>
          <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <center>
          <input className='myButton' type='submit' />
        </center>
      </form>
      <FacebookAuthorize />
    </div>
  );
};

export default LoginContainer;
