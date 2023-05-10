export { rps, rpsls };

function rps(shot) {
    const rpsOptions = ["rock", "paper", "scissors"];
    const opponentShotrps = rpsOptions[Math.floor(Math.random() * 3)];
        //is the shot valid? 

    if (shot === null || shot === undefined) {
        return { "player": opponentShotrps };
    }

    shot = shot.toLowerCase();
    if (!rpsOptions.includes(shot)) {
        return new RangeError();
    }
    
    var result = "";
    

	if (shot === opponentShotrps) {
		result = "tie";
	} else {
		if ((shot === "paper" && opponentShotrps === "rock") ||
			(shot === "rock" && opponentShotrps === "scissors") ||
			(shot === "scissors" && opponentShotrps === "paper"))
			 {
                result = "win";
		} else {
			result = "lose";
		}
	}

    let output_rps = { "player": shot, "opponent": opponentShotrps, "result": result };
    
    return output_rps
}


function rpsls(shot) {
    const rpslsOptions = ["rock", "paper", "scissors", "lizard", "spock"];
    const opponentShotrps = rpslsOptions[Math.floor(Math.random() * 5)];

    //is the shot valid? 
    if (shot === null || shot === undefined) {
        return { "player": opponentShotrps };
    }

    shot = shot.toLowerCase();
    if (!rpslsOptions.includes(shot)) {
        return new RangeError();
    }
    
    var result = "";
    
	if (shot === opponentShotrps) {
		result = "tie";
	} else {
		if ((shot === "spock" && opponentShotrps === "scissors") ||
            (shot === "spock" && opponentShotrps === "rock") ||
			(shot === "scissors" && opponentShotrps === "paper") ||
            (shot === "scissors" && opponentShotrps === "lizard") ||
			(shot === "paper" && opponentShotrps === "rock") ||
            (shot === "paper" && opponentShotrps === "spock") ||
			(shot === "lizard" && opponentShotrps === "spock") ||
			(shot === "lizard" && opponentShotrps === "paper") ||
            (shot === "rock" && opponentShotrps === "lizard") ||
			(shot === "rock" && opponentShotrps === "scissors"))
             {
			result = "win";
		} else {
			result = "lose";
		}

    let output_rpsls = { "player" : shot, "opponent": opponentShotrps, "result": result };
    
    return output_rpsls

    }
}
