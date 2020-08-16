import React from 'react';

const UserInfo = (props) => {
  const data = JSON.parse(props.codeWarsData);
  // console.log(data);
  return (
    <div id='user-info'>
      <ul>
        <li> Username: {data.username}</li>
        <li> Completed Challanges: {data.codeChallenges.totalCompleted}</li>
        <li> Favorite Language: {Object.keys(data.ranks.languages)[0]}</li>
        <li> Codewars Rank: {data.ranks.overall.name}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
