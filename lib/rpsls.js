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




