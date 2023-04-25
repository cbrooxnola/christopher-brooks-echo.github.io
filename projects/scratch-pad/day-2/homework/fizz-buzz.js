// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//print all numbers 1-100, except multiples of 3 and/or 5
for (let i = 1; i < 101; i++){//for loop to contain numbers 1-100
  if ((i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz");//log fizzbuzz if divisible by 3 and 5
  } else if (i % 3 === 0){
    console.log("Fizz"); //log fizz if divisible by 3 but not 5
  } else if (i % 5 === 0){
    console.log("Buzz");//log buzz if divisible by 5 but not 3
  } else {
    console.log(i);
  }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}