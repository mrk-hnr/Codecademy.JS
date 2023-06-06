// The forecast today is 293 Kelvin. Kelvin value will remain constant.
const kelvin = 0

// Celcius is 273 degresss less than Kelvin
let celsius = kelvin - 273

// Fahr formula is  celcius celsius * (9/5) + 32 and Math.floor is added to round the result.
let fahrenheit = Math.floor(celsius * (9/5) + 32)

console.log(`The temperature is ${fahrenheit} degress Fahrenheit`)