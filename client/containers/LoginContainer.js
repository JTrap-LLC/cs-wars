import React from 'react';
import FacebookAuthorize from './fbAuthorize.js';
import img from '../assets/123.jpg';

const LoginContainer = (props) => {
  return (
    <div id='login-container'>
      <img src={img}></img>
      <br></br>
      <center>
        <h2>Join the Code Smith Wars!!</h2>
      </center>
      <br></br>
      <FacebookAuthorize
        setFacebookid={props.setFacebookid}
        setFirstName={props.setFirstName}
        setLastName={props.setLastName}
      />
    </div>
  );
};

export default LoginContainer;
