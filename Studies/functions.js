/**
 *  FUNCTIONS
 * 
 * 0. Functions are a fundamental part of coding.  They are procedures executed on
 *    values for a desired outcome.  They take in a determined, or sometimes intentionally 
 *    undetermined, number and type of inputs to return an output.  
 * 
 * 1. Two phases of using functions.  First, the function must be created, or declared. This is done by scripting 
 *    the function, which can be named (assigned to a variable) or anonymous, to execute a procedure, 
 *    or set of procedures, on a value or values, established as (parameters) in the function declaration. 
 *    Second, the function takes no action until it is called, or invoked, which is when the function executes 
 *    as written.
 * 
 * 2. Parameters are the designated inputs of a function. They are basically placeholders that make the function 
 *    reusable. Arguments are the values passed in to the function and are called within the function wherever 
 *    the parameter appears. 
 * 
 * 3. The syntax for a named function is keyword function followed by function name, with parameters in parenthesis, 
 *    followed by function body in curly braces.
 * 
 * 4. A variable can be assigned to a function by simply declaring a variable by name and assigning (=) it as a function,
 *    with parameters(if any) in parentheses, followed by the body of the function enclosed in curly braces {}
 * 
 * 5. We specify the input(s) of a function with the parameters in parentheses as placeholders when defining the function,
 *    and with the arguments in parentheses when calling the function.
 *    We specify the output of the function within the function body, usually with a return or print statement.
 * 
 * 6. Scoping - a function can access the values//variables in the outer scope (global or parent scope) in which it is 
 *    created, but the outer scope cannot access values/variables created within the function, which are referred to 
 *    as function-scoped or block-scoped.
 * 
 * 7. Closures - closures happens when a function returns another function, and the inner function retains access to the 
 *    outer functions variables after the outer function has returned.  If a value returned from a function is held
 *    in memory somewhere (referenced), that closure stays alive, and data can continue to exist in these 
 *    closures.  Put another way, a variable assigned to a function call that closes an inner function will retain the value 
 *    created by the function call and, when called again, will apply that existing value to the next call.
 * 
 * 
 * 1. Example of a function:
 * 
 * let newFunc = function(value){       //variable newFunc is assigned to a function
 *   if (value !== globalScopeValue){   //the function tests if the value of the passed in argument is not equal to another value
 *     let newValue = value;            //if the condition is met, a new variable is assigned the value of the argument
 *    }
 *   return newValue;                   //the new value is returned either way, and the function closes
 * }
 * 
 * 2. Parameters vs Arguments
 *    let newFunc = function(num1, num2){//num1 and num2 are Parameters (placeholders)
 *      return num1 + num2;
 *    }
 *    newFunc(7, 8);//this function call passes in 7 and 8 as Arguments, and the function resolves to a return of the value 15.
 * 
 * 3. Named Function Syntax Example:
 *    function funcName(param1, param2) {body/action/return}
 * 
 * 4. Variable assigned to Function Example:
 *    var varName = function(param1, param2) {body/action/return};
 * 
 * 5. Input/Output examples:
 *    newFunc = function(param1, param2)//param1 and param2 are the specified, reusable inputs
 *    newFunc(7, 8)//7 and 8 are the inputs for this particular function call
 *    newFunc = function(param1, param2){
 *    return param1 + param2//the return statement specifies the output of the function
 *    };
 * 
 * 6. Scoping Examples:
 * let x = 5;
 * let numPlus = function(num){ //the variable numPlus is assigned to a function
 *   let newNum = num + num;    //the function adds the passed in number to itself
 *   return newNum              //and returns the sum
 * }
 * numPlus(x); //the function is called with variable x passed in as the argument
 * console.log(newNum);
 * 
 * the function call - numPlus(x); - will return 10, as the function can access the outside variable x
 * however, the above console command will return 'reference error...newNum is not defined' as it is outside 
 * the function and cannot access the value of newNum.
 * 
 * let name = 'John'; //variable name assigned to 'John'
 * let changeName = function(){
 *  name += 'athan';  //function adds to the name string, because it can access the global variable 'name'
 *  * };
 * changeName();  //function is called
 * console.log(name); //output = "Johnathan" because the called function has reassigned the global variable
 * 
 * 7. Closure Example
 * 
 *  function newFunc(x) {
 *    let num = 100;
 *    function addNum(y) {
 *      return x + y;
 *    }
 *    return addNum;
 *  }
 *  let result = newFunc(5);//assigns variable 'result' to function call of outer function with argument of 5
 *                         //this will return [function: addNum] because y is undefined
 *  console.log(result(5));//this will return 10, with 5 being passed in as the value for y, and 5 being saved
 *                         //as the value of x in the outer function from the variable assignment {closure}
 * 
 *   
 * 
 * 
 */