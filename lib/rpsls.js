// Code goes here

// Don't forget to export both of these created functions (will be used in the bin directory)
export {rps}; // Make sure to have the following function names (Documentation: this module needs to be importable)
export {rpls}; 

// Start with the Rock-Paper-Scissors Game and then expand to the Rock-Paper-Scissors-Lizard-Spock Game

// RPS Game
function rps(move){
    // Create an array of Strings representing all the choices that can be made
    potential_choice = ["rock", "paper", "scissors"];
    // Create a variable representing a random move that a computer can make (utilize Math.floor() here to get a random value -> Reference online documentation)
    potential_choice_len = potential_choice.length;
    const random_move = Math.floor(Math.random() * potential_choice_len); // Will be used as index for array of potential choices

    // Series of nested if-statements
    if (move === undefined) { // Following would deal with #4 operational requirement ('===' does a stricter comparison between operands)
        // Use random_move variable from earlier to use as an index (':' assigns value)
        return {player: potential_choice[random_move]};
    } else if (!potential_choice.includes(move.toLowerCase())) { // use to '.includes' & 'toLowerCase' to strictly compares the two string values on the command line
        // Throw an error for the following
        console.error('The following move is not allowed. The only options you can select are rock, paper, or scissors!!')
        // throw an error showing that the [ARGUMENT] is out of range (#7 operational requirement).
        throw new RangeError();
    } else {
        





    }
    


}