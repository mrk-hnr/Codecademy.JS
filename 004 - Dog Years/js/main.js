let myAge = 20 // A variable just holding my age.
let earlyYears = 2 // Just a variable holding another age value
earlyYears *= 10.5
let laterYears = myAge -= 2 // takes the myAge variable, and subtract 2 from it. 
laterYears *= 4 // Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.

console.log(earlyYears)
console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears // Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.

myName = "HENRI".toLowerCase() // Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName. The toLowerCase method returns a string with all lowercase letters.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
// Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence: