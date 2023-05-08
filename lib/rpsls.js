export {rps,rpsls};

const rpsOptions = ["rock", "paper", "scissors"];
const rpslsOptions = ["rock", "paper", "scissors", "lizard", "spock"];

function getRandomOption(options) {
    return options[Math.floor(Math.random() * options.length)];
}

function validateOption(shot, options) {
    if (!options.includes(shot)) {
        throw new RangeError(`Range error: use ${options.join(", ")}!`);
    }
}

function rps(shot) {
  let opponentShot = getRandomOption(rpsOptions);
  if (!shot) {
      return { player: opponentShot };
  }
  validateOption(shot.toLowerCase(), rpsOptions);
  let res;
  if ((shot === "rock" && opponentShot === "scissors") || (shot === "paper" && opponentShot === "rock") || (shot === "scissors" && opponentShot === "paper")) {
      res = "win";
  } else if (shot === opponentShot) {
      res = "tie";
  } else {
      res = "lose";
  }
  return {
      player: shot.toLowerCase(),
      opponent: opponentShot,
      rest: res
  };

}

function rpsls(shot) {
  let opponentShot = getRandomOption(rpslsOptions);
  if (!shot) {
      return { player: opponentShot };
  }
  validateOption(shot.toLowerCase(), rpslsOptions);
  let res;
  if ((shot === "scissors" && opponentShot === "paper") || (shot === "paper" && opponentShot === "rock") || (shot === "rock" && opponentShot === "lizard") ||
      (shot === "lizard" && opponentShot === "spock") || (shot === "spock" && opponentShot === "scissors") || (shot === "scissors" && opponentShot === "lizard") ||
      (shot === "lizard" && opponentShot === "paper") || (shot === "paper" && opponentShot === "spock") || (shot === "spock" && opponentShot === "rock") ||
      (shot === "rock" && opponentShot === "scissors")) {
      res = "win";
  } else if (shot === opponentShot) {
      res = "tie";
  } else {
      res = "lose";
  }
  return {
      player: shot.toLowerCase(),
      opponent: opponentShot,
      res: res
  };
}





