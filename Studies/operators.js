/* OPERATORS
*
*JavaScript operators operate the operands, these are symbols that are used to manipulate 
*a certain value or operand. 
*Operators are used to performing specific mathematical and logical computations on operands. 
*In other words, we can say that an operator operates the operands
*
*Types of Operators
* 1. Assignment
* 2. Arithmetic
* 3. Comparison
* 4. Logical
* 5. Unary
* 6. Ternary
*
*1. Assignment
*   var x = 5 - assigns variable x equal to a value of 5
*   x += 5 - variable x is now its previous value plus 5
*   x -= 5  - variable x is now its previous value minus 5 
*   x *= 5  - variable x is now its previous value multiplied by 5 
*   x /= 5  - variable x is now its previous value divided by 5 
*
** 2. Arithmetic 
*    +  add value at right to value at left
*    -  subtract value at right from value at left 
*    * - multiply value at left by value at right
*    / - divide value at left by value at right
*   ++  increment by 1
*   --  decrement by 1
*    %  returns remainder of dividing left hand side by right hand side
*
* 3. Comparison
*   == is equal - value at left is equal to the value at right
*   != is not equal - value at left is not equal to value at right
*   === is strictly equal - value at left is strictly equal to value at right, meaning all characteristics match (case, datatype, etc.)
*   > greater than - value at left is greater than value at right
*   < less than - value at left is less than value at right
*   >= greater or equal - value at left is greater than or the same as value at right
*   <= less or equal - value at left is less than or the same as value at right
* 
* 4. Logical
*   &&(and): left and right hand side must be true
*   ||(or): left OR right hand side must be true
*   !(bang) = NOT - means the opposite of the following is true

*
*  5. Unary 
*    + and - : these attempt to convert a value to a number if it is not already one; a value that does resolves
*    as falsey will return a '0' or 'NaN'
*    console.log(+'');//output = 0
*    console.log(+true);//output = 1;
*    console.log(+'random word');//output = NaN
*
* 6. Ternary 
*    meaning a 3-part expression: if the expression to the left of the ? is truthy, the expression to the 
*    left of the colon is executed; if it is falsey, the expression to the right of the colon is executed.
*    x > y ? return true : return false