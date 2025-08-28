const spaceMe = "-".repeat(30);
// export default spaceMe;
/* Ternary Operator - An alternative to if/else (sometimes) 
  Challenge
    1. Now improve the functionality of this code by letting the player know 
    if their guess was too high, too low, or exactly right.
*/

const playerGuess = 20;
const correctAnswer = 7;

const message =
  playerGuess === correctAnswer
    ? "Exactly correct"
    : playerGuess < 4
    ? "Too low"
    : playerGuess > 10
    ? "Too high"
    : playerGuess >= 5 || playerGuess <= 8
    ? "Too close"
    : "Incorrect guess";

console.log("\n", spaceMe, "1. Ternary Operator", spaceMe, "\n");
console.log("Player guess: " + playerGuess);
console.log(message);

/* Switch Statement - Select one of many code blocks to execute
    Challenge 
    Price List
    Coffee = $2.50
    Tea = $2.00
    Hot Chocolate = $3.00
    Sandwich = $5.00

  For Example: "You selected Coffee. The will be $2.50"
*/

function selectItem(item) {
  let price = 0;

  switch (item) {
    case "Coffee":
      price = 2.5;
      break;
    case "Tea":
      price = 2.0;
      break;
    case "Hot Chocolate":
      price = 3.0;
      break;
    case "Sandwich":
      price = 5.0;
      break;
    default:
      return `Sorry, we don't sell ${item}`;
  }
  return `Your selected ${item}. That will be ${price}`;
}

console.log("\n", spaceMe, "2. Switch Statement", spaceMe, "\n");
console.log(selectItem("d"));

/* Object Destructuring - extract properties from objects 
  OD - enables us to extract properties from objects into distinct variables. 
*/
console.log("\n", spaceMe, "3. Object Destructuring", spaceMe, "\n");

const dreamHoliday = {
  destination: "Austin Texas",
  activity: "visit the Tesla HQ",
  accomodation: "luxury ranch",
  companion: "Elon Musk",
};

const { destination, activity, accomodation, companion } = dreamHoliday;
console.log(`I  would love to go to ${destination} to ${activity}.
I'd sleep in a ${accomodation} and hang out with ${companion} all day.`);

/* setTimeout - The method you've been waiting for! */
console.log("\n", spaceMe, "4. setTimeout", spaceMe, "\n");
console.log("What is the capital of Peru?");

function logAnswer(answer, points) {
  console.log(
    `The answer is ${answer} of course! If you got that right, giver yourself ${points} points`
  );
}

setTimeout(logAnswer, 3000, "Lima", 10);

setTimeout(() => {
  console.log("\nReady for next question?");
}, 4000);

setTimeout(() => {
  console.log("\n🔴");
}, 4500);

setTimeout(displayTrafficLight, 5000, "🟢");

function displayTrafficLight(light) {
  console.log("Green light ", light);
}

// The Event Loop
const start = performance.now();

setTimeout(() => {
  // Get the ending timestamp
  const end = performance.now();
  console.log(`Execution time: ${end - start} milliseconds`);
}, 1000);

for (let i = 0; i < 1000000; i++) {
  let answer = ((i * 2000000) / 67.8) * (45.7 / 3.2);
}
// Time without slow executing code: 1000.8999999761581  milliseconds
// Time with slow executing code: 1001.5 milliseconds

//Import and Export - A deeper dive

// Make sure to use the correct relative path and file extension for your module

/* import { interplanetaryDestinationsArr } from "./data.js";
console.log(interplanetaryDestinationsArr); 
got to the data.js */ 
let countme = 0;
const stopsetInt = setInterval(function () {
  countme += 1;
  // console.log(countme);
  console.log("\n", spaceMe, "5. setInterval", spaceMe, "\nGo to jsAdvance.js file");
  if (countme === 1) {
    clearInterval(stopsetInt);
  } 
}, 6000);
