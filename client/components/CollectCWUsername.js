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
          props.setcwUsername(
            name
          ); /* On submit, update the username state in App */
        }}
      >
        <div>
          <label>Codewars Username:</label>
          <input
            type='text'
            onChange={(e) =>
              setName(e.target.value)
            } /* When user enters password, update the name state above */
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
