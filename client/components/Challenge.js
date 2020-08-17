import React from 'react';

const Challenge = (props) => {
  const month = props.date.substring(5, 10);
  const year = props.date.substring(0, 4);
  const newDate = `${month}-${year}`

  return (
    <div id='challenge'>
      <div>
        <span>Name: </span>
        {props.name}
      </div>
      <div>
        <span>Language: </span> {props.language}
      </div>
      <div>
        <span>Date Completed: </span>
        {newDate}
      </div>
      <br />
    </div>
  );
};

export default Challenge;