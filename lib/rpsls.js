export {rps,rpsls};

function rps(shot) {
    const rpsOptions = ["rock", "paper", "scissors"];
    const opponentShotrps = rpsOptions[Math.floor(Math.random() * rpsOptions.lenght)];
    let output = '';

    //is the shot valid? 
    if (shot == undefined || shot == null) {
        return { player: opponentShotrps };
    }
    shot = shot.toLowerCase();

    if(!rpsOptions.includes(shot)){
        return new RangeError();
    }

    if (shot === opponentShotrps ) {
        output = 'tie';
        }else if(shot === "scissors" && opponentShotrps === "rock" || shot === "paper" && opponentShotrps === "scissors" || shot === "rock" && opponentShotrps === "paper") {
            output = "lose"
        } else {
            output = 'win';
        }

        return{
            player: shot,
            opponentShotrps: opponentShotrps,
            output: output,
        }
}


function rpsls(shot) {
    const rpsOptions = ["rock", "paper", "scissors", "lizard", "spock"];
    const opponentShotrps = rpsOptions[Math.floor(Math.random() * rpsOptions.lenght)];
    let output = '';

    //is the shot valid? 
    if (shot == undefined || shot == null) {
        return { player: opponentShotrps };
    }
    shot = shot.toLowerCase();

    if(!rpsOptions.includes(shot)){
        return new RangeError();
    }

    if (shot === opponentShotrps ) {
        output = 'tie';
    }else if(shot === "scissors" && opponentShotrps === "rock" || shot === "paper" && opponentShotrps === "scissors" || shot === "rock" && opponentShotrps === "paper") {
            output = "lose";
        }else if (shot === "lizard" && opponentShotrps === "rock" || shot === "spock" && opponentShotrps === "lizard" || shot === "scissors" && opponentShotrps === "spock" || shot === "lizard" && opponentShotrps === "scissors" || shot === "paper" && opponentShotrps === "lizard" || shot === "spock" && opponentShotrps === "paper" || shot === "rock" && opponentShotrps === "spock") {
            output = "lose" 
        }
        else {
            output = 'win'; }

        return{
            player: shot,
            opponentShotrps: opponentShotrps,
            output: output,
        }
}
