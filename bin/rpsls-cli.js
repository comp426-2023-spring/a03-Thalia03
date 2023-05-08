#!/usr/bin/env node
import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), {string: ['h', 'r']});
const Help = function() {
    const userHelp = `
    Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}
    `
    console.log(userHelp);
}

const Rules = function() {
    const gameRules = `
    Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors
    `
    console.log(gameRules);
}

switch (true) {
    case args.h !== undefined || args.help:
      Help();
      process.exit();
      break;
    case args.r !== undefined || args.rules:
      Rules();
      process.exit();
      break;
    default:
      try {
        console.log(JSON.stringify(rps(args._[0])));
      } catch(e) {
        console.error(e.message); 
        Help();
        Rules();
        process.exit(1);
      }
  }