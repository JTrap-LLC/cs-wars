import React from 'react';
import Challenge from './Challenge';
import logo from '../assets/123.jpg';

const UserInfo = (props) => {
  const data = JSON.parse(props.codeWarsData); // All the user info (passed from App)

  // map through the challenges array and place the results on line 45 below
  const challenges = props.userChallenges.map((challenge, index) => {
    return (
      <Challenge
        key={`challenge${index}`}
        name={challenge.name}
        language={challenge.completedLanguages[0]}
        date={challenge.completedAt}
      />
    )
  })

  let dateDiff; // intitialize so it updates after if statement runs

  // this if statement calculates the number of days from the last time you did an algo on Code wars. 
  if (props.userChallenges.length) {
    const lastChallDate = new Date(props.userChallenges[0].completedAt);
    const currDate = new Date();
    dateDiff = Math.round((currDate - lastChallDate) / (60 * 60 * 24 * 1000));
  }

  // user info is the red box; 
  return (
    <div id='user-info'>
      <center> <h1>Welcome {props.name}!</h1></center>
      <br />
      <center>
        <ul>
          <li> Completed Challanges: {data.completed}</li>
          <li> Favorite Language: {'Javascript'}</li>
          <li> Codewars Rank: {data.rank}</li>
        </ul>
      </center>
      <br />
      <center><h2>Most Recent Challenges</h2></center>
      <br />
      <div id="challenges">
        {challenges}
      </div>
      <center><img
        src={logo}
        style={{ borderRadius: '7px' }}
        alt='logo'
      ></img>
      </center>
      <br />
      <center><h1>Days since your last challenge:</h1></center> 
      {props.userChallenges.length && <center><h1>{dateDiff}</h1></center>}  
    </div>
  );
};

export default UserInfo;
