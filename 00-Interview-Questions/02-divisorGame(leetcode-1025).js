/**
  - Every even number has the move x = 1, which turns it into an odd number.
  - Every odd number can only subtract an odd divisor, which turns it into an even number.
  - This alternation continues until someone reaches 1.
  - The player who receives 1 cannot make a move and loses.
  - Starting from an even n, Alice forces Bob to eventually receive 1.
  - Starting from an odd n, Alice eventually receives 1 herself.
*/
var divisorGame = function(n) {
    return n % 2 === 0;
};