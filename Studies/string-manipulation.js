/**
 * STRING MANIPULATION
 * 
 * 0.  * Strings can be manipulated in many ways to produce a desired result.
 * Many of these ways are identical to the way an array can be manipulated,
 * or extracted from, because, like arrays, strings are indexed values.
 * Strings can be manipulated with operators or methods.
 * 
 * 1. Operators - strings can be compared with the less than (<) or greateer than (>) operators, much in the way
 *    that numbers can, due to javascript's internal coding.  The alphabet itself is indexed as a permanent
 *    fixture in javascript code, beginning with capital letters.  Strings can be built upon by creating a new 
 *    variable that is equal to the existing string plus an addition.
 *   
 * 
 * 2. Methods - strings can also be manipulated by accessing one or more if their indexed characters,
 *    using methods like slice or splice, or by using the concat method.  There are also methods specific to
 *    strings, such as toUpperCase(), toLowerCase().
 * 
 * 1. Operator examples
 *    if ('A' < 'Z') && ('Z' < 'a') && ('a' < 'z'){
 *      console.log('true'))
 *   }//will print 'true' to the console
 *   if (Alpha > Zeta) {
 *      console.log('true')
 *     } else {console.log('false')}; => will print 'false' to the console
 * 
 *    let oldString = "Tomorrow";
 *    let addedString = "Never Dies";
 *    let newString = oldString += addedString; 
 *    console.log(newString); => prints "TomorrowNever Dies" to the console, because I didn't add a space :/
 * 
 * 2. Method examples
 *   let oldString = "tomorrow";
 *   let newString = oldString.slice(0, 1); => newString = "omorrow"
 *   let newString = oldString[0].toUpperCase() + oldString.substr(1); => newString = "Tomorrow"
 * 
 *   let str1 = 'Hey';
 *   let str2 = 'You';
 *   let str3 = str1.concat(' ', str2);
 *   console.log(str3);//prints 'Hey You' to the console.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */