/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create function declaration called search
function search(animals, name) {
    // iterate through animals array
    for (var i = 0; i < animals.length; i++) {
        // if animal name exists return animal object
        if (animals[i].name === name) {
            return animals[i];
        }
    }
    // return null if name does not exist
    return null;
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// write a function dec called replace
function replace(animals, name, replacement) {
    // iterate through animals array
    for (var i = 0; i < animals.length; i++) {
        // if animal name exists in animals array, replace with animal object
        if (animals[i].name === name) {
           return animals[i] = replacement;
        }
    }
};


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// write function declaration called remove
function remove(animals, name) {
    // iterate through the animals array
    for (var i = 0; i < animals.length; i++) {
       // if animal name exists in animal array, remove it 
       if (animals[i].name === name) {
        return animals.splice(animals[i], 1);
       }
    }  
};


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// write a function declaration called add
function add(animals, animal) {
    // iterate through the animals array
    // if animal object has a name and species property length > 0 & no same name
    for (var i = 0; i < animals.length; i++) {
        if (animal.name.length > 0 && animal.species.length > 0 && animals[i].name !== animal.name) {
            // add animal object to animals array
            animals.push(animal);
            // if animal shares same name as animal in animals array return null
        }else if (animals[i].name === animal.name) {
            return null;
        }
    }
};


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
