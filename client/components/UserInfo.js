import React from 'react';
import Challenge from './Challenge';

const UserInfo = (props) => {
  const data = JSON.parse(props.codeWarsData); // All the user info (passed from App)

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
  
  let dateDiff;
  if (props.userChallenges.length) {
    const lastChallDate = new Date(props.userChallenges[0].completedAt);
    console.log(lastChallDate)
    const currDate = new Date();
    console.log(currDate)
    dateDiff = Math.round((currDate - lastChallDate)/ (60*60*24*1000));
    console.log(dateDiff)
  }

  return (
    <div id='user-info'>
    <center> <h1>Welcome {data.cwusername}!</h1></center>
    <br />
      <ul>        
        <li> Completed Challanges: {data.completed}</li>
        <li> Favorite Language: {'Javascript'}</li>
        <li> Codewars Rank: {data.rank}</li>
      </ul>
      <br />
      <center><h2>Most Recent Challenges</h2></center>
      <br />
      <div id="challenges">
      {challenges}
      </div>
      <center><h1>Days since your last challenge:</h1></center>
      {props.userChallenges.length && <center><h1>{dateDiff}</h1></center>}
    </div>
  );
};

export default UserInfo;
