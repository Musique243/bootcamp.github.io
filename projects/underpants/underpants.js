// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// function takes in any value
// function returns the input value unchanged
_.identity = function(value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// function takes in any value
// function returns the type of input value as a string
_.typeOf = function(value) {
    // determine if object and null
    if (typeof value === "object" && value === null) {
        return "null";
        // determine if object
    } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        return "object";
        // determine if array
    } else if (Array.isArray(value)) {
        return "array";
        // for everything else
    } else {
        // return the type of value
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// function takes in an array and a number
// function returns the first number item of input array
// if array is not array, return empty array
// if no number given or not a number, return first element in array
_.first = function(array, number) {
    // determine if array exists
    if (!Array.isArray(array) || number < 0) {
        // return empty array
        return [];
        // if number not given or not a number
    } else if (number === null || typeof number !== "number") {
        // return first element of array
        return array[0];
    } else if (number > array.length) {
        return array;
    } else {
        return array.slice(0, number);
    }
} 

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// function takes in an array and a number
// function returns the last number items of the input array
// if not an array return empty array
// if not given a number or not a number, return last element of array
_.last = function(array, number) {
    // if array or negative number
    if (!Array.isArray(array) || number < 0) {
        // return empty array
        return [];
        // if not a number or non given
    } else if (number === null || typeof number !== "number") {
        // return last element of array
        return array[array.length - 1];
        // if number greater than array length
    } else if (number > array.length) {
        // return whole array
        return array;
    } else {
        return array.splice(number - 1, array.length);
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// function takes in an array and a value
// function returns the index of array that is the 1st occurrance of value
// return -1 if value not in array
// don't use indexof
_.indexOf = function(array, value) {
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if value is in array
        if (array[i] === value) {
            // return index of value in array
            return i;
        } 
        
    }
    // else value not in array, return -1
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// function takes in an array and a value
// function returns true if array contains the value, otherwise false
// must use ternary operator
_.contains = function(array, value) {
    // iterate through array
    var output = false;
    for (let i = 0; i < array.length; i++) {
        (array[i]) === value ? output = true : output;
    }
    return output;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// function takes in a collection and a function
// if array, function calls once for each element with element, index, collection 
// if object, function calls once for each property with prop value, key, collection
_.each = function(collection, func) {
    // if collection is array
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // call function 
            func(collection[i], i, collection);
        }
        // else collection is object
    } else {
        // iterate through object
        for (var key in collection) {
            // call function
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// function takes in an array
// function returns a new array of all elements from array with dups removed
// use _.indexOf()
_.unique = function(array) {
    // create an empty array
    var output = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        if(_.indexOf(output, array[i]) === -1) {
            output.push(array[i]);
        }
    }
    return output;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// function takes in an array and a function
// function returns a new array of elements for calling func returned true
// call func for each element in array pass args element, index, array
_.filter = function(array, func) {
    // create new array
    var filtered = [];
    // iterate through the input array
    for (let i = 0; i < array.length; i++) {
        // call func for each element with element, index, array
        if (func(array[i], i, array)) {
            // if true push to new array
            filtered.push(array[i]);
        }
    }
    // return output array
    return filtered;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// function takes in an array and function
// function returns a new array of elements which when func called returned false
// call func for each element passing element, index, array
_.reject = function(array, func) {
    // create new array
    var rejected = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // pass func to each arg to test false
        if (!func(array[i], i, array)) {
            // if false push to output array
            rejected.push(array[i]);
        }
    }
    // return output array
    return rejected;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// function takes in an array and function 
// function returns an array made up of 2 sub arrays: 1 contains all values returned truthy, and 1 with falsy
_.partition = function(array, func) {
    // create new arrays for outputs
    var truthy = [];
    var falsy = [];
    var output = [];
    // iterate through the input array
    for (let i = 0; i < array.length; i++) {
        // determine if pass func is truthy
        if (func(array[i], i, array)) {
            // push to truthy
            truthy.push(array[i]);
        } else if (!func(array[i], i, array)) {
            falsy.push(array[i]);
        }
    }
    // return both array combined into output array
    output.push(truthy, falsy);
    return output;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

// function takes in a collection and a function
// call func for each element passing args element, index, collection for array
// call func passing args value, key, collection for object
// returns a new array with value of each call 
_.map = function(collection, func) {
    // create a new output array
    var mapped = [];
    // determine if array
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // pass func to element, index, collection
            mapped.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === "object") {
        // iterate through object
        for (var key in collection) {
            mapped.push(func(collection[key], key, collection));
        }
    }
    // return output array
    return mapped;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// function takes in an array and a property
// function returns an array containing value of property for every element in array
// must use _.map()
_.pluck = function(array, property) {
    // create variable 
    var result = _.map(array, function(element) {
        return element[property];
    });
    // return result
    return result;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// function takes in a collection and a function
// if array, call func with element, index, collection
// if object, call func with value, key, collection
// if return value for every element is true return true, if one false return false
// if function not provided, return true if every element is truthy, otherwise return false
_.every = function(collection, func) {
    // if function is undefined
    if (func === undefined) {
        // if collection is array
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    return false;
                }
            }
            return true;
        }else{
            // else iterate through an object
            for (var key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }
            return true;
        }
    }else{
        // if collection is array
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                if (!func(collection[i])) {
                    return false;
                }
            }
            return true;
        }else {
            // collection is object
            for (var key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }
            return true;
        }
    }
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// function takes in a collection and a function
// call func for every element of collection if array and value if object
// if return value for calling func true for at least one return true, otherwise false
// what if func undefined
_.some = function(collection, func) {
    // if func undefined
    if (func === undefined) {
        // collection is an array
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // if current element is true
                if (collection[i]) {
                    return true;
                }
            }
            return false;
        }else {
            // else its an object
            for (var key in collection) {
                // if current value is true
                if (collection[key]) {
                    return true;
                }
            }
            return false;
        }
    }else {
        // else function is defined
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // determine if passing func to current element is true
                if (func(collection[i], i, collection)) {
                    return true;
                }
            }
            return false;
        }else {
            // else collection is object
            for (var key in collection) {
                // determine if func passing to current value is true
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
            return false;
        }
    }
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
