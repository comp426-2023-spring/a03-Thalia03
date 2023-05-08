const gameOptions = [
  ['rock', ['scissors', 'lizard']],
  ['paper', ['rock', 'spock']],
  ['scissors', ['paper', 'lizard']],
  ['lizard', ['paper', 'spock']],
  ['spock', ['rock', 'scissors']]
];

export function playRPS(playerChoice) {
  // if no input, return {player: (random option)}
  if (!playerChoice) {
    const randomIndex = Math.floor(Math.random() * gameOptions.length);
    return { player: gameOptions[randomIndex][0] };
  }
  playerChoice = playerChoice.toLowerCase();
  const playerIndex = gameOptions.findIndex(option => option[0] === playerChoice);
  if (playerIndex === -1) {
    console.error(`${playerChoice} is not an option.`);
    throw new RangeError(`${playerChoice} is out of range.`);
  }
  const opponentIndex = Math.floor(Math.random() * gameOptions.length);
  const opponentChoice = gameOptions[opponentIndex][0];
  const result = gameOptions[opponentIndex][1].indexOf(playerChoice) !== -1 ? 'lose' : 'win';
  if (result === 'lose') {
    gameOptions[playerIndex][1].forEach(option => {
      if (gameOptions[opponentIndex][1].indexOf(option) !== -1) {
        console.log(`You lost`);
      }
    });
  }
  return { player: playerChoice, opponent: opponentChoice, result };
}

export function playRPSLS(playerChoice) {
  // if no input, return {player: (random option)}
  if (!playerChoice) {
    const randomIndex = Math.floor(Math.random() * gameOptions.length);
    return { player: gameOptions[randomIndex][0] };
  }
  playerChoice = playerChoice.toLowerCase();
  const playerIndex = gameOptions.findIndex(option => option[0] === playerChoice);
  if (playerIndex === -1) {
    console.error(`${playerChoice} is not an option.`);
    throw new RangeError(`${playerChoice} is out of range.`);
  }
  const opponentIndex = Math.floor(Math.random() * gameOptions.length);
  const opponentChoice = gameOptions[opponentIndex][0];
  const result = gameOptions[opponentIndex][1].indexOf(playerChoice) !== -1 ? 'lose' : 'win';
  if (result === 'lose') {
    gameOptions[playerIndex][1].forEach(option => {
      if (gameOptions[opponentIndex][1].indexOf(option) !== -1) {
        console.log(`You lost`);
      }
    });
  }
  return { player: playerChoice, opponent: opponentChoice, result };
}

