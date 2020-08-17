import React from 'react';

const UserInfo = (props) => {
  const data = JSON.parse(props.codeWarsData); // All the user info (passed from App)
  return (
    <div id='user-info'>
      <ul>
        <li> Username: {data.cwusername}</li>
        <li> Completed Challanges: {data.completed}</li>
        <li> Favorite Language: {'Javascript'}</li>
        <li> Codewars Rank: {data.rank}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
