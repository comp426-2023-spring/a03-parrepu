#!/usr/bin/env node

// Code goes here (copy syntax from other bin file and make necessary changes)
// Do I need to import minimist? -> Yes, probably | Does '' vs. "" matter for import statements here?
import { rpsls } from "../lib/rpsls.js"
import minimist from "minimist"

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
    // Don't forget to use 'process.exit()' just like above
    process.exit(0);
}

// Will utilize the following for later
const choice2 = arg2._[0]

// Do a try-catch statement/block here (look at online documentation)
try {
    // Output in console (reference notes on 'stringify' in repository to see how it works)
    console.log(JSON.stringify(rpsls(choice2)));
} catch (e) { // You can also put 'Exception e'
    help_m();
    rules_m();
    // As always, don't forget to use 'process.exit()'
    process.exit(0);
}

// Display this help message and exit (use documentation from repository) | Update: Change the following 
function help_m(){
    // Output the following onto the console
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);

}

// Display the rules and exit (also use documentation from repository) | Update: Change this also
function rules_m(){
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
}

// Do I need to utilize a 'process.exit()' here? -> Probably not
// process.exit(0);