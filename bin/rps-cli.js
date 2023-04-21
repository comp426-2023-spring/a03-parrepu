#!/usr/bin/env node

// Code goes here (import relevant function from rpsls.js)
// Do I need to import minimist? -> Include just in case
import { rps } from '../lib/rpsls.js'
import minimist from 'minimist'

// Same structure as previous assignments
const arg2 = minimist(process.argv.slice(2)); 

if (arg2.help_m || arg2.h){ // Reference documentation for letter to put after '.'
    // Simply return the help message
    help_m();
    // Don't forget to use 'process.exit()'
    process.exit(0);
}

if (arg2.rules_m || arg2.r){ // Reference documentation for letter to put after '.'
    // Simply return the help message
    rules_m();
    // Don't forget to use 'process.exit()'
    process.exit(0);
}

const choice2 = arg2._[0]

// Do a try-catch statement/block here (look at online documentation)
try {
    // Output in console
    console.log(JSON.stringify(rps(choice2)));
} catch (e) { // You can also put 'Exception e'
    help_m();
    rules_m();
    // As always, don't forget to use 'process.exit()'
    process.exit(0);
}

// Display this help message and exit (use documentation from repository)
function help_m(){
    // Output the following onto the console
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);

}

// Display the rules and exit (also use documentation from repository)
function rules_m(){
    console.log(`Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors)`);
}

// Do I need to utilize a 'process.exit()' here?
// process.exit(0);