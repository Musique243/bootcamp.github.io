// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: function takes in an input array
O: function returns the values of the array printed to the console
C: use console.log()
E: N/A
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // iterate through the input array
  for (var i = 0; i < array.length; i++) {
    // print values of the array using console log
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: function takes in an input array
O: function returns the values of the array in reverse
C: use console.log()
E: N/A
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE // 
  // iterate through the input array backwards
  for (var i = array.length - 1; i >= 0; i--) {
    // print the values of the array using console log
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: function takes in an input object
O: function returns an array with the object keys
C: N/A
E: N/A
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // return an array with the object keys
  return Object.keys(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: function takes in an input object
O: function returns the object keys printed to the console
C: use console.log()
E:
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // iterate through the input object  
  for (var key in object) {
    // print the keys to the console
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: function takes in an input object
O: function returns an array of the object's values
C: N/A
E: N/A
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // return array with object values 
  return Object.values(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I: function takes in an input object
O: function returns the object values printed to the console
C: use console.log()
E:
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // iterate through the input objedt
  for (var key in object) {
    // print object values to the console
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: function takes in an input object
O: function returns the number of key/value pairs in the object
C: N/A
E: N/A
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // create a count variable
  var count = 0;
  // iterate through the input object
  for (var key in object) {
    count += 1;
  }
  // return the output number of pairs
  return count;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: function takes in an input object
O: function returns the object values printed in reverse to the console
C: use console.log()
E:
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var output = [];
  for (var key in object) {
    output.push(object[key]);
  }
  for (var i = output.length - 1; i >= 0; i--) {
    console.log(output[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
