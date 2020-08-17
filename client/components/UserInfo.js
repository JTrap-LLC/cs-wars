import React from 'react';

const UserInfo = (props) => {
  const data = JSON.parse(props.codeWarsData);
  console.log('DATA IN USERINFO', data);
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
