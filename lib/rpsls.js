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
    }else if(shot === "rock" && opponentShotrps === "scissors" || shot === "scissors" && opponentShotrps === "paper" || shot === "paper" && opponentShotrps === "rock") {
            output = "win";
        }else if (shot === "rock" && opponentShotrps === "lizard" || shot === "lizard" && opponentShotrps === "spock" || shot === "spock" && opponentShotrps === "scissors" || shot === "scissors" && opponentShotrps === "lizard" || shot === "lizard" && opponentShotrps === "paper" || shot === "paper" && opponentShotrps === "spock" || shot === "spock" && opponentShotrps === "rock") {
            output = "win" ;
        }
        
        else {
            output = 'lose'; }

        return{
            player: shot,
            opponentShotrps: opponentShotrps,
            output: output,
        }
}
