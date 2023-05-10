/**
 * LOOPS
 * 
 * 0. Loops are methods of iterating through collections to access every element or property within
 *    them, to either add, remove, or otherwise manipulate the data on an individual basis, depending on 
 *    given conditions.  There are three basic kinds of loops: While, For, and For...In.
 * 
 * 
 * 1. While, For, and For...In Loops
 *    A while loop executes a specified statement for as long as its "while" condition is met.
 *    A for loop will iterate through an array according to a specific condition,
 *       usually some sort of count that increments or decrements, with an assigned stopping point. 
 *    A for..in loop is used to access every property within an object one at a time.
 * 
 * 2. Looping forward and backward - while loops and for loops can be set up to run forward or 
 *    backward, but not a for...in loop.  A while loop is set to run until a condition is met, which can 
 *    be reaching a certain count moving up or down, among other things.  A for loop can count either up or
 *    down, and is assigned a starting and stopping point upon initialization.
 * 
 * 
 * 3. Loop forward and backward through an array - this is done with a for loop (see example below).
 * 
 * 4. Loop over an Object - this is done with a for...in loop (see example below).
 * 
 * 
 * 
 * CODE EXAMPLES
 * 
 * 2. Count up or down with any specifications using a While Loop 
 *    let n = 0;
 *    while (n < 500) {
 *    n++} 
 *    this loop will run 500 times, increasing the value of n by 1 during each loop; when 
 *    n finally equals 500, the loop will stop
 * 
 *    let n = 500;
 *    while (n > 0) {
 *    n--} 
 *    this loop will run 500 times, decreasing the value of n by 1 during each loop; when 
 *    n finally equals 0, the loop will stop
 *    
 * 3.  Loop over an Array forward or backward using a For Loop
 *     for (var i = 0; i < array.length; i++) {
 *     newArray.push(array[i])
 *     };   
 *     this loop will take all the elements of an input array and push them, one at a time,
 *     into a new array. This could also be done backwards, as such:
 *     for (var i = array.length - 1; i >= 0; i--) {
 *     newArray.push(array[i])
 *     };
 * 
 * 4.  Loop over an object using a for...in loop
 *     for (var key in object) {
 *     newArray.push(object.key)
 *     } 
 *     this loop will access all the keys in an object and add them to a new array
 *  
 * 
 * 
 */