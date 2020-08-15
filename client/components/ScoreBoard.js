import React, { useState } from 'react';
import FriendContainer from './FriendContainer';

const ScoreBoard = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Rob');
  return (
    <div id='score-board'>
      {count}
      {name}
      <button
        onClick={() => {
          setName(name + 's'), setCount(count + 1);
        }}
      >
        Click me
      </button>
      <br></br>
      ScoreBoard!! <FriendContainer />;
    </div>
  );
};

export default ScoreBoard;
