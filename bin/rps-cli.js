#!/usr/bin/env node

// Code goes here (import relevant function from rpsls.js)
// Do I need to import minimist? -> Yes, include just in case | Does '' vs. "" matter for import statements here? -> Nope
import minimist from "minimist"
import {rps} from '../lib/rpsls.js'

// Same structure as previous assignments
const arg2 = minimist(process.argv.slice(2)); 

if (arg2.help_me){ 
    // Simply return the help message
    help_me();
    // Don't forget to use 'process.exit()'
    process.exit(0);
}

if (arg2.h) { // Reference documentation for letter to put after '.' (Same structure as if-statment above)
    // Simply return the help message
    help_me();
    // Don't forget to use 'process.exit()'
    process.exit(0);
}

if (arg2.rules_doc){ 
    // Simply return the help message
    rules_doc();
    // Don't forget to use 'process.exit()' just like above
    process.exit(0);
}

if (arg2.r) { // Reference documentation for letter to put after '.' (Same structure as if-statment above)
  // Simply return the help message
  rules_doc();
  // Don't forget to use 'process.exit()' just like above
  process.exit(0);  
}

// Do a try-catch statement/block here (look at online documentation)
try {
    // Output in console (reference notes on 'stringify' in repository to see how it works)
    console.log(JSON.stringify(rps(arg2._[0])));
} catch (error) { // You can also put 'Exception e'
    help_me();
    rules_doc();
    // As always, don't forget to use 'process.exit()'
    process.exit(0);
}

// Display this help message and exit (use documentation from repository) | Pay attention to quotes (`) used here
function help_me(){
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

// Display the rules and exit (also use documentation from repository) | Pay attention to quotes (`) used here
function rules_doc(){
    // Output the following into the console
    console.log(`Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors)`);
}

// Do I need to utilize a 'process.exit()' here?
// process.exit(0);