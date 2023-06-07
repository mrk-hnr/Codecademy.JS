// The switch keyword

// else if statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example:

// let groceryItem = 'papaya';
 
// if (groceryItem === 'tomato') {
//   console.log('Tomatoes are $0.49');
// } else if (groceryItem === 'papaya'){
//   console.log('Papayas are $1.29');
// } else {
//   console.log('Invalid item');
// }

// In the code above, we have a series of conditions checking for a value that matches a groceryItem variable. Our code works fine, but imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain!

// A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

// let groceryItem = 'papaya';
 
// switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');
//     break;
//   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
//   default:
//     console.log('Invalid item');
//     break;
// }
 
// // Prints 'Papayas are $1.29'

// * The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare In the example, the value or expression of the switch statement is groceryItem.
// * Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that cas ‘s console.log() would run.
// * The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
// * The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
// * At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.

// 1. Let’s write a switch statement to decide what medal to award an athlete.  athleteFinalPosition is already defined at the top of main.js. So start by writing a switch statement with athleteFinalPosition as its expression. 
// 2. Inside the switch statement, add three cases:
//     * The first case checks for the value 'first place'       
//       - If the expression’s value matches the value of the case then console.log() the string 'You get the gold medal!'
//     * The second case checks for the value 'second place' 
//       - If the expression’s value matches the value of the case then console.log() the string 'You get the silver medal!'
//     * The third case checks for the value 'third place' 
//       - If the expression’s value matches the value of the case then console.log() the string 'You get the bronze medal!'
//     Remember to add a break after each console.log().
// 3. Now, add a default statement at the end of the switch that uses console.log() to print 'No medal awarded.'.  If athleteFinalPosition does not equal any value of our cases, then the string 'No medal awarded.' is logged to the console. Remember to add the break keyword at the end of the default case. 

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case "first place":
  console.log("You get the gold medal!")
  break;
  case "second place":
  console.log("You get the silver medal!")
  break;
  case "third place":
  console.log("You get the bronze medal!")
  break;
  default:
  console.log("No medal awarded.")
  break;
}

