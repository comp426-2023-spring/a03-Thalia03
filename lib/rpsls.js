export {rps,rpsls};

const rpsOptions = ["rock", "paper", "scissors"];
const rpslsOptions = ["rock", "paper", "scissors", "lizard", "spock"];
const opponentShotrps = rpsOptions[Math.floor(Math.random() * 3)];
const opponentShotrpsls = rpslsOptions[Math.floor(Math.random() * 3)];

function rps(shot) {
    //is the shot valid? 
  if (shot == undefined || shot == null) {
      return { player: opponentShotrps };
  }

  shot = shot.toLowerCase();
  if (!rpsOptions.includes(shot)){
    return new RangeError();
  }

  let result;

  if (shot === 'rock') {
    if (opponentShotrps === 'rock') {
        result = 'tie';
    }  else if (opponentShotrps === 'paper') {
        result = 'lose';
    } else {
        result = 'win';
    }
} else if (shot === 'paper') {
    if (opponentShotrps === 'rock') {
        result = 'win';
    } else if (opponentShotrps === 'paper') {
        result = 'tie';
    } else {
        result = 'lose';
    }
  } else {
    if (opponentShotrps === 'rock') {
        result = 'lose';
    } else if (opponentShotrps === 'paper') {
        result = 'win';
    } else {
        result = 'tie';
    }
  }

  return {'player': shot, 'opponent': opponentShotrps, 'result': result};

}

function rpsls(shot) {
    let result;

    if (shot == undefined || shot == null) {
        return { player: opponentShotrpsls };
    }
  
    shot = shot.toLowerCase();
    if (!rpslsOptions.includes(shot)){
      return new RangeError();
    }

    if (shot === 'rock') {
      if (opponentShotrpsls === 'lizard' || opponentShotrpsls === 'scissors') {
        result = 'win';
      } else if (opponentShotrpsls === 'paper' || opponentShotrpsls === 'spock') {
        result = 'lose';
      } else {
        result = 'tie';
      }
    } else if (shot === 'paper') {
      if (opponentShotrpsls === 'rock' || opponentShotrpsls === 'spock') {
        result = 'win';
      } else if (opponentShotrpsls === 'scissors' || opponentShotrpsls === 'lizard') {
        result = 'lose';
      } else {
        result = 'tie';
      }
    } else if (shot === 'scissors') {
      if (opponentShotrpsls === 'paper' || opponentShotrpsls === 'lizard') {
        result = 'win';
      } else if (opponentShotrpsls === 'spock' || opponentShotrpsls === 'rock') {
        result = 'lose';
      } else {
        result = 'tie';
      }
    } else if (shot === 'lizard') {
      if (opponentShotrpsls === 'spock' || opponentShotrpsls === 'paper') {
        result = 'win';
      } else if (opponentShotrpsls === 'rock' || opponentShotrpsls === 'scissors') {
        result = 'lose';
      } else {
        result = 'tie';
      }
    } else {
      if (opponentShotrpsls === 'scissors' || opponentShotrpsls === 'rock') {
        result = 'win';
      } else if (opponentShotrpsls === 'lizard' || opponentShotrpsls === 'paper') {
        result = 'lose';
      } else {
        result = 'tie';
      }
    }
    
    if (opponentShotrpsls === 'spock') {
        opponentShotrpsls = 'Spock';
    }
    
    return {'player': shot, 'opponent': opponentShotrpsls, 'result': result};
    
}
