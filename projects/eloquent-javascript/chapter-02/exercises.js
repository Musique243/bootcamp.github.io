
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function takes in an input number
// function returns number of # according to input number
function triangles(x) {
  // loop 
  for (let line = "#"; line.length <= x; line += "#") {
    console.log(line);
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function takes in a number
// function returns console log of all numbers from 1 to 100 depending on divisible by
function fizzBuzz() {
  // iterate from 1 to 15
  for (let i = 1; i <= 15; i++) {
    // condition for if divisible by 5 & 3
    if (i % 15 === 0) {
      console.log("fizzbuzz");
      // condition divisible by 3
    } else if (i % 3 === 0) {
      console.log("fizz");
      // condition divisible by 5
    } else if (i % 5 === 0) {
      console.log("buzz");
      // else console log i
    } else {
      console.log(i);
    }
    
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function should take in an input number
// function returns a space or # at each position to form a chessboard
function drawChessboard(size) {
  // create an empty string
  var string = "";
  // loop
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 === 0) {
        string += " ";
      } else {
        string += "#";
      }
    }
    string += "\n";
  }
  console.log(string);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
