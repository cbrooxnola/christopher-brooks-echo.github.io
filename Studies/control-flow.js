/**
 * CONTROL FLOW
 * 
 * 0. Control flow is how a program executes code from top to bottom.
 *    Loops, conditional statements, and functions can change the flow
 *    from first line to last line, redirecting the code to ignore 
 *    or repeat some commands.  Commonly used methods of altering control flow 
 *    include If Else-If, and Else statements, as well as Switch commands.
 *    Just like it sounds, these statements give the code different paths
 *    to take depending on conditions they stipulate.
 * 
 * 1. If - an If statement directs the program to perform an action ONLY IF 
 *    a certain condition is met.  If the condition is met, the action is performed.  
 *    Otherwise, nothing happens at all, unless an Else If or Else statement is also provided.
 * 
 * 2. Else If - an Else If statement directs the program to perform a certain action ONLY
 *    if its parent IF statement condition is not met, and the condition provided by the 
 *    Else If statement is met.  If the condition is met, the action is performed.  Otherwise, 
 *    nothing happens at all, unless an additional Else statement is provided.
 * 
 * 3. Else - as Else statement directs the program to perform an action ONLY if the conditions
 *    of any and all preceding If or Else If statements are not met.  This can be cosnidered 
 *    a practical synonym of a base case in recursion, while also a theoretical antonym of the same.
 * 
 * 4. Switch - a Switch command is a complete package of conditional statements, stating various cases
 *    separated by breaks.  The program performs the action, such as reassigning a variable
 *    or altering a print command, assigned to the case provided.
 * 
 * 
 * If, Else If, Else Example:
 * 
 * let num = 15;
 * if (num > 100){
 * console.log('large number');   //nothing prints to the console
 * } else if (num > 50){
 * console.log('big number'); //nothing prints to the console
 * }  else {                            
 * console.log('small number); // prints to the console 'small number'
 * }
 * 
 * Switch Example:
 * 
 *  * let todaysSpecial = 'Spaghetti';
 * switch(todaysSpecial) {
 *   case: 'Monday': 
 *     console.log('Red Beans');
 *   break;
 *   case 'Tuesday':
 *     console.log('Tacos');
 *   break;
 *   default: 
 *     console.log('No Special Today!');
 * }
 * 
 */