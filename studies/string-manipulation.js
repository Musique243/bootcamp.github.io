/**
 * STRING MANIPULATION

0. Strings can be manipulated with both operators and string methods.
*/

// 1. Manipulated using operators

//Combine two strings using the add operator
let a = "good";
let b = "evening";
let c = a + " " + b;
console.log(c); // Prints good evening

let d = "happy";
d += "new year";
console.log(d); // Prints happy new year

//Combine two strings using concat
let e = "hello";
let f = "there";
let g = e.concat(" ", f);
console.log(g); // Prints hello there

// 2. Manipulation using methods

//Access strings with .length
var personName = "Lance";
console.log(personName.length); // Prints 5
console.log(personName[personName.length - 1]); // Prints e

//Modify string with .slice
var string = "dog, cat, hamster";
var part = string.slice(5, 8);
console.log(part); // Prints cat

//Modify string with .replace
var text = "Hello, good morning";
var newText = text.replace("morning", "evening");
console.log(newText); // Prints hello, good evening

//Change string to all caps with toUpperCase()
var greeting = "Hello Customer";
var char = greeting.charAt(0);
console.log(char); // Prints H

//Split a string into an array with .split
var name = "Paul, Jones, Smith";
var names = name.split(",");
console.log(names); // Prints ['Paul', 'Jones', 'Smith']