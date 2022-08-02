// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
/*
I: function takes in an input string or number named base
O: function returns a function that tests whether a value is greater than the input
C: N/A
E: N/A
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function that tests if a value is greater than input base
    return function(value) {
        return value > base;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
/*
I: function takes in an input string or number called base
O: function returns a function that tests if a value is less than the input base
C: N/A
E: N/A
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function that tests if value is less than the base
    return function(value) {
        return value < base;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
/*
I: function takes in a single character
O: function returns a function that tests if a string starts with the character
C: needs to be same case
E: N/A
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return a function that tests if a string starts with the character
    return function(string) {
        return string[0].toLowerCase() === startsWith.toLowerCase();
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
/*
I: function takes in a single character
O: function returns a function that tests if a string ends with the character
C: needs to be same case
E:
*/
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return a function that tests if string ends with the character
    return function(string) {
        return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/*
I: function takes in an array of strings and a function that modifies a string
O: function returns the modified array of strings
C: N/A
E: N/A
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create a new array //
    var modified = [];
    // iterate through array, pass modified function through string//
    for (var i = 0; i < strings.length; i++) {
        modified.push(modify(strings[i]));
    }
    // return the output array 
    
    return modified;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: function takes in an array of strings and function that tests the string 
O: function returns a boolean if strings passed the test
C: N/A
E: N/A
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // iterate through the array and pass function through strings
    for (var i = 0; i < strings.length; i++) {
        if (test(strings[i]) === false) {
            return false;
        }
        
    }
    return true;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
