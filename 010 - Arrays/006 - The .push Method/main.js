// The .push() Method

// Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

// One method, .push(), allows us to add items to the end of an array. Here is an example of how this is used:

//         const itemTracker = ['item 0', 'item 1', 'item 2'];
//         itemTracker.push('item 3', 'item 4');
//         console.log(itemTracker); 
//         // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// So, how does .push() work?

//     We access the push method by using dot notation, connecting push to itemTracker with a period.
//     Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
//     .push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
//     Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.

// If you’re looking for a method that will mutate an array by adding elements to it, then .push() is the method for you!

// 1. Add two elements to the chores array using .push().
// 2. Use console.log to print your chores array to make sure your items were added.

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push("Walk the goldfish", "kiss some babies")

console.log(chores)