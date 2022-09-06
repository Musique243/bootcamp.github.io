/**
  VARIABLES:
  0. Variables are named identifiers or containers that hold reassignable values. Variables can hold different types of values, such as strings, numbers, booleans, arrays, and objects. Variables are hoisted to their function or global scope.
  1. There are two different phases of variables: declaration and assignment.
*/

// 1. Declaration //
/* The keyword, var, is used followed by an identifier in order to create and declare a variable. Variables will hold the value of undefined, until assigned a value.
*/

var userName;
console.log(userName);
// Prints undefined because name has not been assigned a value
// Variables can also be declared with the keywords let and const, but these keywords act different from var.

// 2. Assignment //
// Variables can be assigned and reassigned values by using the = operator. //
// An undefined variable given a value assignment //

userName = 'Hank';
console.log(userName);
// Prints Hank

// The same variable reassigned a new value. //
userName = 'Bill';
console.log(userName);
// Prints Bill because variables declared with var can be reassigned	

// 3. var, let, const
/* Variables can also be declared using the keywords let and const, but act different from var. The let keyword can be reassigned, but is considered block scoped. The const keyword cannot be reassigned and will give an error message. Constant variables also cannot be left unassigned or undefined.
*/

let num = 2;
num = 3;
console.log(num);
// Prints 3, let can be reassigned

const age = 4;
age = 5;
console.log(age);
// Prints TypeError: Assignment to constant variable, const cannot be reassigned

let a = 1;
if (a === 1) {
  let a = 3;
  console.log(a);
  // Prints 3
};

function a() {
    const letter = "C";
};
console.log(letter);
// Prints letter is not defined because variables created in the function are only accessible inside the function
  

// 4. Hoisting
/* Hoisting is when var and function declarations are dragged up to the top of the code line. Scope is the area in the code where variables can be declared. Constants are block scoped, which means they are confined to the code block where they are assigned. Constants are not hoisted to the top of their block of code. Variables used with the let keyword are also not hoisted and are block scoped.
*/

x = 20;

var x;
console.log(x); // Prints 20 because variables declared with the keyword var are hoisted to the top of the code. Meaning variable declared with var can be used before it has been declared