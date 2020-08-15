import React, { useState } from 'react';
import Player from './Player';

const ScoreBoard = (props) => {
  const users = [
    {
      username: 'Alonsog66',
      name: null,
      honor: 174,
      clan: null,
      leaderboardPosition: 158741,
      skills: null,
      ranks: {
        overall: {
          rank: -6,
          name: '6 kyu',
          color: 'yellow',
          score: 142,
        },
        languages: {
          javascript: {
            rank: -6,
            name: '6 kyu',
            color: 'yellow',
            score: 142,
          },
        },
      },
      codeChallenges: {
        totalAuthored: 0,
        totalCompleted: 24,
      },
    },
    {
      username: 'Rnobile135',
      name: null,
      honor: 60,
      clan: null,
      leaderboardPosition: null,
      skills: null,
      ranks: {
        overall: {
          rank: -7,
          name: '7 kyu',
          color: 'white',
          score: 48,
        },
        languages: {
          javascript: {
            rank: -7,
            name: '7 kyu',
            color: 'white',
            score: 48,
          },
        },
      },
      codeChallenges: {
        totalAuthored: 0,
        totalCompleted: 18,
      },
    },
    {
      username: 'justinjaeger',
      name: null,
      honor: 72,
      clan: null,
      leaderboardPosition: null,
      skills: null,
      ranks: {
        overall: {
          rank: -7,
          name: '7 kyu',
          color: 'white',
          score: 57,
        },
        languages: {
          javascript: {
            rank: -7,
            name: '7 kyu',
            color: 'white',
            score: 57,
          },
        },
      },
      codeChallenges: {
        totalAuthored: 0,
        totalCompleted: 11,
      },
    },
  ];

  const playerlist = users.map((player, index) => {
    return (
      <Player
        key={`player${index}`}
        username={player.username}
        rankName={player.ranks.overall.name}
        totalCompleted={player.codeChallenges.totalCompleted}
      />
    );
  });
  return <div id='score-board'>{playerlist}</div>;
};

export default ScoreBoard;
