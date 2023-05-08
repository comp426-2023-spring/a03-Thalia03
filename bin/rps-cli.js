#!/usr/bin/env node
import minimist from "minimist";
import { rps } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), {string: ['h', 'r']});

const Help = function() {
    const userHelp = `
    Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}
    `
    console.log(userHelp);
}

const Rules = function() {
    const gameRules = `
    Rules for Rock Paper Scissors:
      - Scissors CUTS Paper
      - Paper COVERS Rock
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
