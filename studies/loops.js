
/**
  LOOPS
0. Iterates over data and lets you execute a certain block of code as many times as needed. Loops are usually used to iterate over collections of data. There are three types of loops including for, for-in, and while loops.
*/

// 1. For Loop //
/* Use for iterating over arrays. These loops use a starting and stopping value with how to either increase or decrease the value.

Syntax of for loop:
for (start; stop; update) {code to run};
start: defines a counting variable
stop: defines the condition that when false ends the loop
update: defines how to increment or decrement the counting variable
*/

var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
} // index starts at index 0 and stops at end of array, incrementing. Prints 1, 2, 3, 4, 5 //

for (var i = array.length-1; i >= 0; i--) {
  console.log(array[i]);
}// start at last index and stop at 0 counting down the index. Prints 5, 4, 3, 2, 1 //

// 2. For-in Loop //
// Use for iterating over objects. Iterates over all the object keys in an object. //

object = {a: 10, b: 20, c: 30};
for (var key in object) {
  console.log(object[key]);
}

// 3. While Loop //
// Requires a while statement or condition to be true in order to run the loop. //

var x = 10;
while(x < 15) {
  x++;
  console.log(x);
}//starts at 10 increments by +1 as long as x is less than 15. Prints 11, 12, 13, 14, 15

