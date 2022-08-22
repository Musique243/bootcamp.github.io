// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./bootcamp.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// function takes in an array
// function returns the number of male customers
// must use filter
var maleCount = function(array) {
    // use filter for male customers
    var males = _.filter(array, function(customer) {
        // if males in array
        if (customer.gender === "male") {
            return true;
        }else {
            return false;
        }
    })
    // get length of males which is the number
    return males.length;
};

// function takes in an array
// function returns the number of female customers
// must use reduce
var femaleCount = function(array) {
    // use reduce
    var females = _.reduce(array, function(numFemales, customer) {
        // if female in customer
        if (customer.gender === "female") {
            numFemales += 1;
        }
        return numFemales;
    }, 0)
    return females;
};

// function takes in an array
// function retunrs a string of the oldest customer's name
var oldestCustomer = function(array) {
    var oldest = _.reduce(array, function(oldestCustomer, customer) {
        if (customer.age > oldestCustomer.age) {
            oldestCustomer = customer;
        }
        return oldestCustomer;
    })
    return oldest.name;
};

// function takes in an array
// function returns a string of the youngest customer's name
var youngestCustomer = function(array) {
    var youngest = _.reduce(array, function(youngestCustomer, customer) {
        if (customer.age < youngestCustomer.age) {
            youngestCustomer = customer;
        }
        return youngestCustomer;
    })
    return youngest.name;
};

// function takes in an array
// function returns a number that is the avg bal of all customers
var averageBalance = function(array) {
    var total = _.reduce(array, function(accumulator, current, index, array) {
        var balance = current.balance.replace(/[$,]/g, "");
        var num = parseFloat(balance);
        accumulator += num;
        return accumulator;
    }, 0)
    return total / array.length;
};

// function takes in an array and a letter
// function returns the number of customers names that begin with the letter
var firstLetterCount = function(array, letter) {
    // create counting variable
    var total = 0;
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if name contains letter
        if (array[i].name[0].toLowerCase() === letter.toLowerCase()) {
            total += 1;
        }
    }
    // return the total number
    return total;
};

// function takes in an array, customer, and letter
// function returns the number of friends the given customer has with the given letter
var friendFirstLetterCount = function(array, customer, letter) {
    // create counting variable
    var total = 0;
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if customer is in array
        if (array[i].name === customer) {
            // iterate through freinds list
            for (let j = 0; j < array[i].friends.length; j++) {
                // if friend name starts with letter
                if (array[i].friends[j].name[0].toLowerCase() === letter.toLowerCase()) {
                    total += 1;
                }
            }
        }
    }
    // return total;
    return total;
};

// function takes in an array and name
// function returns an array of the names that have a given customers name in it
var friendsCount = function(array, name) {
    // create variable to hold list
    var list = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // iterate through friends list
        for (let j = 0; j < array[i].friends.length; j++) {
            // if friends name equals input name
            if (array[i].friends[j].name === name) {
                // put in new array
                list.push(array[i].name);
            }
        }
    }
    // return the list of names
    return list;
};

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
