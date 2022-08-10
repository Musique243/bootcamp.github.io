//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const { slice, remove } = require("lodash");

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
    for (var key in object) {
        if(typeof object[key] === "string") {
             arr.push(object[key]);
        }
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else if (typeof collection === "object") {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitStr = string.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    return splitStr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // return name is a species
    // first letter of name and species must be capitalized
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes in an object
// function returns the object noises array as a string separated by a space
// if no noises return "there are no noises"
function maybeNoises(object) {
    // if statement to determine if noises array exists
    if (object.noises && object.noises.length > 0) {
        // return noises array as string seperated by space
        return object.noises.join(" ");
    }else {
        // otherwise return "there are no noises"
        return "there are no noises";
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes in a string of words and a word
// function returns true if word is in string, otherwise false
function hasWord(string, word) {
    // conditional statement to determine if word is in string
    if (string.includes(word)) {
        // return true
        return true;
    } else {
        // otherwise return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes in a name and object
// function adds name to object's friends array and returns object
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes in a name and object
// function returns true if name is a friend of object, false otherwise
function isFriend(name, object) {
    // conditional statement to check if friends array exists in object
    if (Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
        // iterate through object friends array
        for (let i = 0; i < object.friends.length; i++) {
            // conditional statement to determine if name exists in object friends array
            if (object.friends[i] === name) {
                // return true
                return true;
            }
        }
    }
    // otherwise return false
    return false;
}
   

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes in a name and a list of people array
// function returns a list of all the names that is not friends with
function nonFriends(name, array) {
    // create a new array to hold the list of names
    var list = [];
    var output = [];
    var current = null;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes in an object, key, and value
// function updates the property key on object with new value. If key does not exist on object, create it
function updateObject(object, key, value) {
    // update object's key with the new value
    object[key] = value;
    // return the updated object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes in an object and an array of strings
// function removes any properties on object that are listed in array
function removeProperties(object, array) {
    // iterate through array
    for (var i = 0; i < array.length; i++) {
        // conditional to determine if string in array exists in object
        if (object.hasOwnProperty(array[i])) {
            // delete the object property
            delete(object[array[i]]);
        }
    }
    // return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes in an array
// function returns an array with all duplicates removed
function dedup(array) {
    // create new variable for set 
    var noDups = new Set(array);
    // create new variable for values
    var val = noDups.values();
    return Array.from(val);

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}