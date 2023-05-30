/**
 * VARIABLES
 * 
 * 0. Variables are named containers for data in javascript.  We create variables using 
 *    declarative keywords.  We can then access or manipualte the data to which the variable 
 *    is assigned by referencing the variable name anywhere in our program.
 * 
 * 1. Declaration and Assignment: To create a variable in Javascript, we must first declare 
 *    it using one of three declarative keywords.  Each has its own particular limitations and 
 *    purposes, helping us to determine which is appropriate for use in a given instance, as such:
 * 
 * 2. Var, let, const: Var, let & const are the three declarative keywords.  When declaring a variable,
 *    it's important to keep these facts in mind:
 *    VAR - declares a globally scoped variable that can be accessed anywhere in the program, regardless of the scope
 *          in which it is created.  VAR can be redeclared 
 *          or reassigned.  This makes it of little use when we want to keep our variable contained within a 
 *          smaller scope of our program, for a limted, specific purpose, which is often the case.  A variable 
 *          declared with VAR will always be hoisted to the top of the program at runtime.
 *    LET - declares a locally (or block) scoped variable that is only global if so created.  LET can be reassigned, 
 *          but not redeclared.  A LET variable will not be hoisted to the top of the program at runtime.  A LET
 *          variable must be initialized upon declaration.
 *    CONST - also declares a block-scoped variable that is only global if so created.  A CONST variable cannot be 
 *          redeclared or reassigned, and is not hoisted.  A CONST variable must be initialized upon declaration.
 * 
 * 3. Hoisting - a term applying to control-flow, hoisting is a process in which, at runtime, elements of the program 
 *          are read by the system in a particular order.  As such, functions and variable declarations (not assignments!) 
 *          are hoisted to the top of their scope. This is important to know because it affects how and when a variable
 *          should be declared and/or initialized within our program.
 *  
 *
 * //CODE EXAMPLES
*
* 1. Declaration
*   at the declaration phase, the variable is assigned no value
*                       var nameLast;
*
*    Assignment
*   the variable nameLast is assigned the value 'Brooks'
*                       nameLast = 'Brooks'; 
*
* 2. var, let & const
*                       var age = 35;//declares and initializes a globally-scoped variable that can be redeclared or reassigned
 *                        age = 36;//variable can be reassigned
 *                        var age = 37;//variable can be redeclared
*                       let age = 35;//declares and initializes a block-scoped variable that can be reassigned, but not redeclared
*                         age = 36;// variable can be reassigned
*                         let age = 37;//ERROR - variable cannot be redeclared  
*                       const age = 35;//declares and initializes a block-scoped variable that cannot be redeclared or reassigned
*                         age = 36;//ERROR - variable cannot be reassigned
*  
*                       const age = 37;//ERROR - variable cannot be redeclared
* BLOCK SCOPING OF LET & CONST
*    if (10 > 9){
*       var x = true;
*       let y = true;
 *      const z = true;
*     }
*   console.log(x); prints 'true' to the console;
*   console.log(y); ERROR - y is not defined
*   console.log(z); ERROR - z is declared but its value is never read
*
* 3. Hoisting
*       //CODE AS WRITTEN:
*       let age = 21;
*       function change(num){
*           num += 1;
*        }
*       var newAge = change(age);
*  
*       //CODE PROCESSED AT RUNTIME
*       function change(num){
*           num += 1;
*        }
*       var newAge;
*       let age = 21;
*       newAge = change(age);
*/