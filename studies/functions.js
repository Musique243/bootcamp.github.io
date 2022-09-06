
/**
  FUNCTIONS
0. Type of data that allows us to execute a block of code. Functions let us reuse existing code and can be used multiple times throughout the data. There are two phases of using functions: declaration, which is creating the function, and invocation or calling which uses the function.
*/

// 1. Parameters and Arguments //
/* Parameters are required inputs for the function. These inputs should be named appropriately to make what needs to be provided for the function clear. Arguments are the inputs or values that are passed to the function during the call phase.
*/

//Parameters are variables listed as part of the function definition

function sum(param1, param2) {
  console.log(param1 + param2);
}

//Arguments are values that are passed to the function when it is invoked

sum(arg1, arg2); 

function sum(param1, param2) { // the function takes in two parameters and will return the sum of both printed to the console
  console.log(param1 + param2);
}
sum(10, 20); // when we invoke the function, we pass in the two values of 10 & 20. The function adds both values together and will return 30

function sub(num1, num2) { // num1 & num2 are parameters or inputs that the function takes in
    return num1 - num2;
}
sub(3, 2); // 3 & 2 are the arguments that are passed into the function which returns 3 - 2 = 1

// 2. Syntax //
/* Functions are declared using the keyword function. The parameters of the function are put in parenthesis followed by the body of the function and usually a return statement. When calling a function, the arguments are also put in parenthesis.

function(parameter1, parameter2) {
  body: enter code
  return something
}
*/

// 3. Function Types //
/* Functions can be named and can also be anonymous or considered expressions. An anonymous function is not named, and are usually being passed to another function. A function expression is assigned to a variable.
*/

// Function expression
var add = function(num1, num2) {
    return num1 + num2;
  }
  console.log(add(1, 2)); // prints 3
  
  // Function declaration
  function sub(num1, num2) {
    return num1 - num2;
  }
  console.log(sub(5, 3)); // prints 2
  
  // 4. Scope and Closures //
  /* Variables declared inside a function are not accessible from outside that function. Functions are able to modify values from parent or global scopes. Closures give the function outside access to a variable from an inner function.
  */
  
  var total = 5; // global scoped variable

  function addToTotal(num) {
    console.log(total + num); // function has access to the total variable and can modify it
  }
  console.log(total); // Prints the global scoped variable

  addToTotal(5); // function is invoked, it modifies the variable but it can only be accessed inside the function

  //Closure gives access to an outer function's scope from an inner function even after the parent function has closed

  function example() {
    const name = "Ted";
    function showName() { 
        console.log(name); // a closure occurs when the showName function accesses the varible name from its parent scope and keeps the variable alive
    }
    return showName;
  }
  const myExample = example();
  myExample();