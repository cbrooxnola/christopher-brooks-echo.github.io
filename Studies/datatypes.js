/**
 * DATATYPES
 * 
 * 0. Datatypes are the various built-in data structures of the programming language.  The 
 *    term datatype refers to the nature of the data, or information, that is being referenced 
 *    by a variable.  Generally speaking, variables in javascript can be assigned, and reassigned, 
 *    to values of any datatype.  Here are the different datatypes:
 * 
 * 1. Number - stores a primitive value, a number.  ex: 1, 2, 300, 45
 *
 * 2. String - stores a primitive value, a word or group of words, read as text. ex: 'reading is fun'
 * 
 * 3. Boolean - a primitve value that stores a true/false outcome value, often used with conditional statements
 *    ex: if (9 > 8) {return true} else {return false}
 * 
 * 4. Array - a complex value that stores an indexed list of other values, which can be primitive or 
 *    complex.  Ideal for storing multiple values of similar type and importance.  
 *    ex: let newArray = [1, 'two', [3, 4, 5], {name: John, id: 5150}];
 * 
 * 5. Object - a complex value that stores key value pairs (not indexed).  Ideal for storing an entity
 *    with multiple and various values, wherein the order is unimportant.
 *    ex: let newObject = {name: 'John', rank: 'c-level', hire date: 01/01/1981};
 * 
 * 6. Function - a complex value that is the result of performing some action on an existing value.
 *    a function is created with PARAMETERS that act as placeholders for ARGUMENTS(values) passed in
 *    to the function.  
 *    ex: let newFunc = function(array, test){if (test(array) = false){return array}};
 * 
 * 7. Undefined - a primitive value that identifies any variable that has not been assigned
 *    a value.  
 * 
 * 8. Null - a primitive value that represent the intentional absence of value in a variable
 * 
 * 
 * 9. NaN - a primitive value that simply means "not a number", often used as a specified boolean
 * 
 * 10. Infinity and -Infinity - primitive values that represent a maximum, uncountable number, which could be
 *     positive or negative
 * 
 * 11. Primitive datatypes can hold a single value.  Complex datatypes can hold multiple values, which can be 
 *     primitive or complex.  Generally speaking, primitive datatypes are defined by javascript, while complex datatypes 
 *     are defined by the programmer during their construction.  For example, when javascript sees 12345, it will 
 *     by default process that as the datatype 'number'.  However, if a programmer creates an object, they must use 
 *     the curly braces {} to tell javascript - hey, this is an object.
 * 
 * 12. Primitive values are immutable, meaning their value cannot be changed, only copied by producing a new value/
 *    new variable.  In the same sense, primitive values are passed into functions BY COPY, and any manipulation
 *    of them performed within the function applies within the function only, and does not affect the original value
 *    of the data.
 *    Complex values, on the other hand, are passed into functions BY REFERENCE, and their outcome within the function
 *    can alter their existing value.
 * 
 * Example: 
 *    let x = 5;
 *    let arr = [1, 2, 3];
 * 
 *    let randoFunc = function(x, arr){
 *      x += arr[0];  //this will create a copy of x that now equals 6
 *      arr[1] += arr[2];  //this will change the value of arr[1] to 5
 *    console.log(x); //output = 6
 *    };
 *    console.log(x); //output = 5
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */