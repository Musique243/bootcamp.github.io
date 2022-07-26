////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function takes in two numbers
// function returns the smaller of the two numbers
function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num2 < num1) {
    return num2;
  } else if (num1 === num2) {
    return 0;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function takes in a number
// function returns true if number is even, otherwise false
function isEven(num) {
  // condition to determine if number is even
  if (num % 2 === 0) {
    // return true
    return true;
  } else {
    // otherwise return false
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function takes in a string and a character
// function returns a number of times the character is in the string
function countChars(string, char) {
  // create count variable
  var count = 0;
  // iterate through string
  for (let i = 0; i < string.length; i++) {
    // condition if char exists in string
    if (string[i] === char) {
      // add to count
      count++;
    }
  }
  // return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function takes in a string
// function returns a number of how many uppercase B characters in string
function countBs(string) {
  // create count variable
  var count = 0;
  // iterate through string
  for (let i = 0; i < string.length; i++) {
    // condition to determine if B exists in string
    if (string[i] === "B") {
      // add to count
      count++;
    }
  }
  // return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
