// Magic Eight Ball

// You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.
// In this project we will build a Magic Eight Ball using control flow in JavaScript.
// The user will be able to input a question, then our program will output a random fortune.
// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

// 1. In the first line of the program, define a variable called userName that is set to an empty string. If the user wants, they can enter their name in between the quotation marks. 
// 2. Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.
// 3. Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
// 4. Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
// 5. We need to generate a random number between 0 and 7. Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) from the Math library. 
//     Math.floor(Math.random() * 8);
// Check the hint to learn how it works!
// 6. Create one more variable named eightBall, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of randomNumber.
// 7. We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall:
//     'It is certain'
//     'It is decidedly so'
//     'Reply hazy try again'
//     'Cannot predict now'
//     'Do not count on it'
//     'My sources say no'
//     'Outlook not so good'
//     'Signs point to yes'
// If the randomNumber is 0, then save an answer to the eightBall variable; if randomNumber is 1, then save the next answer, and so on. If you’re feeling creative, make your own responses!
// 8. Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
// 9. Run your program a few times to see random results appear in the console! If you want extra practice:
//     If you started with a switch statement, convert it to if/else if/else statements.
//     If you started with if/else if/else statements, convert them to a switch statement.

  let username = "Henri"
let userQuestion = "Will I become a software engineer?"
let randomNumber = Math.floor(Math.random() * 8) + 1 // Added +1 coz I'm getting confused with matching 0 and the number of cases.
let eightball = ""

username ? console.log(`Hello, ${username}`) : console.log("Hello")
console.log(`Your question is ${userQuestion}`)

switch (randomNumber) {
  case 1:
  eightball = "It is certain"
  console.log(eightball)
  break;

  case 2:
  eightball = "It is decidedly so"
  console.log(eightball)
  break;
 
  case 3:
  eightball = "Reply hazy try again"
  console.log(eightball)
  break;

  case 4:
  eightball = "Cannot predict now"
  console.log(eightball)
  break;

  case 5:
  eightball = "Do not count on it"
  console.log(eightball)
  break;

  case 6:
  eightball = "My sources say no"
  console.log(eightball)
  break;

  case 7:
  eightball = "Outlook not so good"
  console.log(eightball)
  break;

  case 8:
  eightball = "Signs point to yes"
  console.log(eightball)
  break;
  }