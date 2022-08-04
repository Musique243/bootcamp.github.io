/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create empty object called animal
var animal = {};
// add property of species and name any species using dot notation
animal.species = "canine";
// add property of name using bracket notation and give the animal a name
animal["name"] = "Bandit";
// add property called noises and make it an empty array
animal.noises = [];
// print animal to console using console.log
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create empty array called noises
var noises = [];
// add a string to noises using bracket notation
noises[0] = "bark";
// add another noise to end of noises using array method
noises.push("woof");
// add another noise using unshift method
noises.unshift("howl");
// add another noise to end of array using bracket notation
noises[noises.length] = "whine";
// console log length of noises
console.log(noises.length);
// console log last element without hardcoding
console.log(noises.length - 1);
// console log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign noises property to animals to the new noises array using bracket notation
animal["noises"] = noises;
// add another noise to noises property on animal
animal.noises.push("growl");
// console log animal
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create empty array called animals
var animals = [];
// push animal onto the new animals array
animals.push(animal);
// console log animals
console.log(animals);
// create variable duck and assign the following data
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
// push duck to the animals array
animals.push(duck);
// console log animals
console.log(animals);
// create two more animal objects and add them to the animals array
var cat = { species: 'feline', name: 'Whiskers', noises: ['meow', 'purr'] };
var tiger ={ species: 'feline', name: 'Stripes', noises: ['roar', 'growl'] };
animals.push(cat);
animals.push(tiger);
// console log animals and length of animals
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a variable called friends and assign it to an empty arrray
var friends = [];
// write a function called getRandom that takes the animals array and returns a random index using Math.random
var getRandom = function(animals) {
  return Math.floor(Math.random() * animals.length);
}
// Using a random index from this function, get a random animal and add its `name` to `friends`.
friends.push(animals[getRandom(animals)].name);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}