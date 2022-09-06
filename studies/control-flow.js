/*

CONTROL FLOW:

0. Control Flow is the order in which a computer executes code. Code runs in order from the first line to the last line of a file, unless changed by control structures such as Conditionals or conditional statements. These control structures can change the flow of processing. The types of conditional statements include the If, Else-if, Else, and Switch statements.
*/

// 1. If Statement //
/*The basic syntax of an if statement shows that if a condition is met, the statement will execute.
if(condition) { 
  statement
}
*/

var hour = 9;
if(hour < 18) {
  console.log("Good Day");
};
/*prints Good Day to the console because the condition (hour < 18) is true, therfore the console.log statement is executed. 
*/

// 2. Else-if Statement //
/* Used to specify a new condition to test if the first if statement is false.
*/

var hour = 22;
if(hour < 18) {
  console.log("Good Day");
}else if (hour > 18) {
  console.log("Good Evening");
};
//prints Good Evening because the second condition is true

// 3. Else Statement //
// The else statement will run when all previous statements are false.//

var hour = 21;
  if(hour < 10) {
  console.log("Good Morning");
  }else if (hour < 18) {
  console.log("Good Day")
  }else{
  console.log("Good Evening")
  }
// prints Good Evening

// 4. Switch Statement //
/* Evaluates an expression and then tries to find a matching case clause
*/

var color = "purple";
switch (color) {
  case "yellow":
    console.log("yellow");
    break;
  case "black":
    console.log("black");
    break;
  default:
    console.log("color chosen not allowed");
    break;
}
// prints color chosen not allowed
