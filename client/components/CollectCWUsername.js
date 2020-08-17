import React, { useState } from 'react';

const CollectCWUsername = (props) => {
  const [name, setName] = useState('');
  return (
    <div id='login-container'>
      <form
        action=''
        value='Update'
        onSubmit={(e) => {
          e.preventDefault();
          props.setUsername(
            name
          ); /* On submit, update the username state in App */
        }}
      >
        <div>
          <label>User:</label>
          <input
            type='text'
            onChange={(e) =>
              setName(e.target.value)
            } /* When user enters password, update the name state above */
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            onChange={
              (e) =>
                setPassword(
                  e.target.value
                ) /* When user enters password, update the name state above */
            }
          />
        </div>
        <br></br>
        <center>
          <input className='myButton' type='submit' />
        </center>
      </form>
    </div>
  );
};

export default CollectCWUsername;
