export { rps, rpsls };

const rpsOptions = ["rock", "paper", "scissors"];
const rpslsOptions = ["rock", "paper", "scissors", "lizard", "spock"];

function rps(shot) {
    const opponentShotrps = rpsOptions[Math.floor(Math.random() * rpsOptions.lenght)];
    let outputrps = { "player": shot, "opponent": opponentShotrps, "output": "" }
    //is the shot valid? 
    if (shot == null || shot == undefined) {
        return { "player": opponentShotrps };
    }

    shot = shot.toLowerCase();
    if (!rpsOptions.includes(shot)) {
        return new RangeError();
    }

    if (shot === 'paper') {
        outputrps['output'] = opponentShotrps === 'rock' ? 'win' : opponentShotrps === 'paper' ? 'tie' : 'lose';
    }
    if (shot === 'rock') {
        outputrps['output'] = opponentShotrps === 'scissors' ? 'win' : opponentShotrps === 'rock' ? 'tie' : 'lose';
    }
    if (shot === 'scissors') {
        outputrps['output'] = opponentShotrps === 'paper' ? 'win' : opponentShotrps === 'scissors' ? 'tie' : 'lose';
    }
    return outputrps
}


function rpsls(shot) {
    let outputrpsls = { "player": shot, "opponent": opponentShotrps, "output": "" }
    const opponentShotrps = rpslsOptions[Math.floor(Math.random() * rpslsOptions.lenght)];
    //is the shot valid? 
    if (shot == null || shot == undefined) {
        return { "player": opponentShotrps };
    }

    shot = shot.toLowerCase();

    if (!rpslsOptions.includes(shot)) {
        return new RangeError();
    }

    if (shot === 'paper'){
        outputrpsls['output'] = opponentShotrps === 'rock' || opponentShotrps == 'spock' ? 'win' : opponentShotrps === 'paper' ? 'tie' : 'lose';
    }
    if (shot === 'rock'){
        outputrpsls['output'] = opponentShotrps === 'scissors' || opponentShotrps == 'lizard' ? 'win' : opponentShotrps === 'rock' ? 'tie' : 'lose';
    }
    if (shot === 'scissors'){
        outputrpsls['output'] = opponentShotrps === 'paper' || opponentShotrps == 'lizard' ? 'win' : opponentShotrps === 'scissors' ? 'tie' : 'lose';
    }
    if (shot === 'lizard') {
        outputrpsls['output'] = opponentShotrps === 'paper' || opponentShotrps == 'spock' ? 'win' : opponentShotrps === 'lizard' ? 'tie' : 'lose';
        return outputrpsls
    }
    if (shot === 'spock') {
        outputrpsls['output'] = opponentShotrps === 'scissors' || opponentShotrps == 'rock' ? 'win' : opponentShotrps === 'spock' ? 'tie' : 'lose';
    }
    
    return outputrpsls

}
