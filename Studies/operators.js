/* OPERATORS
*
*JavaScript operators operate the operands, these are symbols that are used to manipulate 
*a certain value or operand. 
*Operators are used to performing specific mathematical and logical computations on operands. 
*In other words, we can say that an operator operates the operands
*
*Types of Operators
* 1. Assignment - assigns a value to its left operand, based on its right operand.
* 2. Arithmetic - takes two numerical values as operands and returns a single numerical value.
* 3. Comparison - compares its operands and returns a logical value based on if the comparison is true
* 4. Logical - Logical operators are typically used with Boolean values, and return a Boolean value. 
*              However, the && and || operators actually return the value of one of the specified operands, 
*              so if these operators are used with non-Boolean values, they may return a non-Boolean value. 
* 5. Unary - only has one operand, and resolves to a desgnated value or absence of value
* 6. Ternary - meaning a 3-part expression: if the expression to the left of the ? is truthy, the expression to the 
*              left of the colon is executed; if it is falsey, the expression to the right of the colon is executed.
*
*1. Assignment
*   var x = 5 - assigns variable x equal to a value of 5
*   x += 5 - variable x is now its previous value plus 5; x = 10
*   x -= 5  - variable x is now its previous value minus 5; x = 5
*   x *= 5  - variable x is now its previous value multiplied by 5; x = 25
*   x /= 5  - variable x is now its previous value divided by 5; x = 5
*
** 2. Arithmetic 
*    +  add value at right to value at left  Ex: 5 + 5 = 10
*    -  subtract value at right from value at left Ex: 5 - 5 = 0
*    * - multiply value at left by value at right  Ex: 5 * 5 = 25
*    / - divide value at left by value at right  Ex: 5 / 5 = 1
*   ++  increment by 1  Ex: var x = 5; x++; //x = 6
*   --  decrement by 1  Ex: var x = 5; x--; //x = 4
*    %  returns remainder of dividing left hand side by right hand side
*       Ex: 10 % 3 = 1 (10 diivided by 3 is 3 with a remiander of 1); 20 % 7 = 6 (20 divided by 7 is 2 with a remainder of 6)
*
* 3. Comparison
*   == is equal - value at left is equal to the value at right  Ex:  A == a; 1 == '1'
*   != is not equal - value at left is not equal to value at right  Ex:  A != B; 1 != 2
*   === is strictly equal - value at left is strictly equal to value at right, meaning all characteristics match (case, datatype, etc.)
*     Ex: 1 === 1 BUT 1 !== '1'; A !== 'A'
*   > greater than - value at left is greater than value at right  Ex: 10 > 5
*   < less than - value at left is less than value at right  Ex: 5 < 10
*   >= greater or equal - value at left is greater than or the same as value at right  Ex: 100 >= 100
*   <= less or equal - value at left is less than or the same as value at right  Ex: 50 <= 50
* 
* 4. Logical
*   &&(and): left and right hand side must be true  
*     Ex: if (x > y && y > z) {body will execute if BOTH conditions are true}
*   ||(or): left OR right hand side must be true
*     Ex: if (x > y || y > z) {body will execute if EITHER condition is true}
*   !(bang) = NOT - means the opposite of the following is true
*     Ex: if (!x > y){body will execute if x is NOT greater than y}
*
*  5. Unary 
*    delete object.property => removes specified property from object
*    typeOf value => returns the datatype of the value
*
* 6. Ternary 
*    10 > 5 ? return true : return false => returns true
*    5 > 10 ? return true : return false => returns false
*/