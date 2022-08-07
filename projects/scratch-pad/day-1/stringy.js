// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I: function takes in an input string
O: function returns the length of input string
C: N/A
E: N/A
*/
function length(string) {
    // YOUR CODE BELOW HERE //
    // returns length of input string
    return string.length;
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: function takes in an input string
O: function returns a new string that is lowercase
C: N/A
E: N/A
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // return the input string in lowercase
    return string.toLowerCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: function takes in an input string
O: function returns a string that is uppercase
C: N/A
E: N/A
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // return the input string in uppercase
    return string.toUpperCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: function takes in an input string
O: function returns the string dash cased
C: N/A
E: N/A
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // return the string dash cased and lowercased
    return string.replace(/\s/g, '-').toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: function takes in an input string and a single character
O: function returns a true if string begins with character, false otherwise
C: function is case insensitive
E: N/A
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // add conditional statement if input string begins with character return true, false otherwise
    // must be same case 
    if (string[0].toLowerCase() === char.toLowerCase()) {
        return true;
    }else{
        return false;
    }

    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: function takes in an input string and a single character
O: function returns true if string ends with character, false otherwise
C: function is case insensitive
E: N/A
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // conditional statement if input string ends with character
    // returns true if string ends with character, false otherwise
    if (string[string.length - 1].toLowerCase() === char.toLowerCase()) {
        return true;
    }else{
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: function takes in two input strings
O: function returns the two input strings concatenated into one string
C: N/A
E: N/A
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // return the two strings concatenated into one string
    return stringOne.concat(stringTwo);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: function takes in any number of input strings
O: functon returns all input strings joined together
C: must use an array method join
E: N/A
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // returns any input strings joined together
    // use array method join
    var args = Array.from(arguments);
    return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: function takes in two input strings
O: function returns the longest string of the two input strings
C: N/A
E: N/A
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create a conditional statement comparing the length of the two input strings
    // return the longest of the two strings
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    }else{
        return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: function takes in two input strings
O: functon returns a number (-1, 0, 1) depending on which string is higher in alphabetical order
C: N/A
E: N/A
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create conditional statement comparing which string is higher in alphabetical order
    // returns 1 if first is higher, -1 if second is higher, and 0 if they are both equal
    // higher means less when comparing alphabetically
    if (stringOne < stringTwo) {
        return -1;
    }else if (stringTwo < stringOne) {
        return 1;
    }else if (stringOne === stringTwo) {
        return 0;
    }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: function takes in two input strings
O: function returns a number depending upon which string is lower in alphabetical order
C: N/A
E: N/A
*/
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create conditional statement comparing which string is lower in alphabetical order
    // returns 1 if first is lower, -1 if second is lower, and 0 if both are equal
    // lower means more when comparing alphabetically
    if (stringOne < stringTwo) {
        return 1;
    }else if (stringTwo < stringOne) {
        return -1;
    }else if (stringOne === stringTwo) {
        return 0;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
