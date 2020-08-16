import React, { useState, useEffect } from 'react';
import Player from './Player';

const ScoreBoard = (props) => {
  const [userInfo, setUserInfo] = useState([]);

  const users = ['sull364', 'Alonsog66', 'Rnobile135', 'justinjaeger'];

  useEffect(() => {
    Promise.all(
      users.map(async (user) => {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
          targetUrl = `https://www.codewars.com/api/v1/users/${user}`;
        const respJSON = await fetch(proxyUrl + targetUrl);
        const resp = await respJSON.json();
        return resp;
      })
    ).then((resp) => {
      console.log(resp);
      setUserInfo(resp);
    });
  }, []);
  const playerlist = userInfo.map((player, index) => {
    return (
      <Player
        key={`player${index}`}
        username={player.username}
        rankName={player.ranks.overall.name}
        totalCompleted={player.codeChallenges.totalCompleted}
      />
    );
  });

  return (
    <div id='score-board'>
      <div id='scoreboard-title'>
        <h1>Scoreboard</h1>
      </div>

      {!userInfo.length ? <div></div> : playerlist}
    </div>
  );
};

export default ScoreBoard;
