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

  return (
    <div id='user-info'>
    <center> <h1>Welcome back {data.cwusername}!</h1></center>
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
    </div>
  );
};

export default UserInfo;
