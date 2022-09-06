
/**
  OPERATORS:
  0. Used to perform specific mathematical and logical computations on values or operands. There are several different types of operators which include assignment, arithmetic, comparison, logical, unary, and ternary.
*/

// 1. Assignment Operators //
/* Assigns a value to its left operand based on the value of its right operand. The most common assignment operators include =, +=, -=, *=, /=, %=.
=	  assigns a value to a variable        x = y	      x = y
+=	  adds a value to a variable           x += y	      x = x + y
-=	  subtracts a value from a variable    x -= y	      x = x - y
*=	  multiplies a variable                x *= y	      x = x * y
/=	  divides a variable                   x /= y	      x = x / y
%=	  assigns a remainder to a variable    x %= y	      x = x % y
*/

var number = 4;
console.log(number); // prints 4

var num = 7;
console.log(num += 2); // prints 9 

var x = 3;
console.log(x %= 2); // prints 1

// 2. Arithmetic Operators //
/* Performs arithmetic on numbers and variables. They include +, -, *, **, / %, ++, --.

+	  Addition
-	  Subtraction
*	  Multiplication
**	Exponentiation   raises first operand to power of the second operand
/	  Division
%	  Remainder        returns the division remainder
++	Increment
--	Decrement

*/

var x = 6;
var y = 2;
var z = x * y;
console.log(z); // prints 12

var x = 10;
var y = 20;
var z = x + y;
console.log(z); // Prints 30

var x = 5;
var y = 5;
var z = x - y;
console.log(z); // Prints 0

var x = 10;
var y = 2;
var z = x / y;
console.log(z); // Prints 5

var x = 5;
var y = 2;
var z = x % y;
console.log(z); // Prints 1

var x = 3;
x++;
var z = x;
console.log(z); // Prints 4

var x = 5;
x--;
console.log(x); // Prints 4

var x = 5;
var y = x ** 2;
console.log(y); // Prints 25

// 3. Comparison Operators //
/* Used to compare its operands and returns a logical value whether the comparison is true. Comparison operators are used in logical statements to determine equality or difference between variables or values.

==	      equal to	                 5 == 5	true, 5 == "5" true	
===	      deeply or strictly to	     5 === "5"	false	
!=	      not equal to	             6 != "6" false	
!==	      deeply not equal to        6 !== "7"	true	
>	      greater than	             7 > 8	false	
<	      less than	                 7 < 8	true	
>=	      greater than or equal to	 8 >= 8 true	
<=	      less than or equal to	     7 <= 8	true	

*/

// 4. Logical Operators //
/* Usually used with boolean values and return a Boolean value of true or false. Depending on what logical operator used, the return value could possibly return a non boolean value. These operators consist of the and (&&), or (||), and not (!).
*/

var a = 1;
var b = 2;
if(a + b === 3 && a - 1 === 0) {
  console.log(true);
}
// Prints true because 1 + 2 = 3 and 1 - 1 = 0 //

if(a + b === 3 || b - 1 === 0) {
  console.log(true);
}
// Prints true because only one condition needs to be met 1 + 3 === 3 //

// 5. Unary Operators // 
/* Operators that consider a single operand and perform all the types of operations on that single operand. These types include unary plus, unary minus, not, and type of. For the type of operator, it will return the type of value such as string, boolean, and number. The type of operator will return object for an array and object.*/

console.log(typeof 100); // Prints "number"
console.log(typeof "goodbye"); // Prints "string"

// 6. Ternary Operators //
/* Operator that takes three operands. The operator can have one of two values based on a condition. If the condition is true, the operator has the value of the first value, otherwise it takes the value of the second value. The syntax is

condition ? val1 : val2

*/

var result = (5 > 10) ? "incorrect" : "correct";
console.log(result);
// Prints correct //
