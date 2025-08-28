const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n",spaceMe,"1.1 Function Expressions",spaceMe,"\n"); /************************************************/
// Function Expressions - Different syntax & behaviour
try {
  // function getSpendAlert(amount) { return `Warning! You just spent L$${amount}!`; } // Normal function

  console.log(getSpendAlert(500)); // Hoisted

  /* Function Expressions - (can't Hoisted throws an error) 
    Are not hoisted
    Are cleaner and easier to read (arguably)
    Are the chosen style of some dev teams 
  */
  const getSpendAlert = function (amount) {
    return `Warning! You just spent L$${amount}!`;
  };
} catch (error) {
    console.log(`Error an occur:`,error.message);
}

const b = 0;
const dividend = 10;
try {  
  // Code that might throw an error
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  let result = dividend / b;
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}

/************************************************/ console.log("\n",spaceMe,"1.2 Function Expressions Challenge",spaceMe,"\n"); /************************************************/
try {
  /* Challenge: 
    1. Convert this function declaration to a function expression */

  const getTheftAlert = function (numberOfTransactionsHour) {
    if (numberOfTransactionsHour > 5) {
      return `You have made ${numberOfTransactionsHour} transactions in the past hour. We think your 
            card might have been compromised`;
    } else {
      throw new Error(`${numberOfTransactionsHour} < 5`);
    }
  };
  console.log(getTheftAlert(4)); // try to transfer to top before the function expression
} catch (err) {
    console.log(`Error an occur:`, err.message);
}

/************************************************/ console.log("\n",spaceMe,"2. Arrow Functions",spaceMe,"\n"); /************************************************/
/* Ultra Concise functions */
try {
  const getGastoAlert = (name ,amount) =>  `Warning! Hey ${name}! You just spent L$${amount}`; 
//   const getGastoAlert = (name ,amount) => {
//     return `Warning! Hey ${name}! You just spent L$${amount}`;
//   };
  console.log(getGastoAlert(`Gabriel`, 20)); // Cant hoisted || try to Remove parameter
} catch (error) {
    console.log(`Error an occur:`,error.message);
}
/* When to use Brackets
1 parameter: brackets not needed
0 or 2 more parameters: brackets needed 

    When to use {} + return 
- Return one line of code without curly braces or the return keyword
- More complex logic requires the curly braces and the return keyword.*/

/************************************************/ console.log("\n",spaceMe,"3. Arrow Functions Challenge",spaceMe,"\n"); /************************************************/
/* Challenge:
1. Refactor this function to use an arrow function
2. Make sure you write the least code possible. 

Increase Complex:
1. Refactor this function so it only warns drivers
    who are going over the speed limit.
2. The function now needs to take in tow parameters.
   The first is the speed limit, the second is the driver's actual speed. 
*/
try {
    // const speedWarning = speed => `You are going at ${speed} mph!`;
    const speedWarning = (speedLimit, speed) => {
        if (speed > speedLimit) return `You are reach at speed Limit ${speedLimit}, You speed ${speed} mph!`;
        return `You are going at ${speed} mph!`;
    };
    console.log(speedWarning(70, 71)); // Can't hoisted function
} catch (error) {
    console.log(`Error an occur:`,error.message);
}

/************************************************/ console.log("\n",spaceMe,"4. Inline Arrow Functions Challenge",spaceMe,"\n"); /************************************************/
/* Challenge
1. Refactor this .map() method so the inline function is an arrow function.
2. Write the least amount of code possible. */
const distanceTraveledMiles = [267, 345, 234, 190, 299];

const distanceTraveledKm = distanceTraveledMiles.map(distance => Math.round(distance * 1.6));
console.log(distanceTraveledMiles);

/************************************************/ console.log("\n",spaceMe,"5. Inline Arrow Functions Refactor Challenge",spaceMe,"\n"); /************************************************/
import { itemsBoughtArr} from "../Function Expressions & Parameters/ExportedFiles/itemsBoughArr.js";
/* Challenge:
1. Use the reduce method to calculate the 
total cost of items which have been bought. */

try {
  function calculateTotalCost(mgaGpangplit, discount) {
    console.log(mgaGpangplit.map((elemento) => {return elemento.priceUSD})); // return a new Array usng .map() method

    let total = mgaGpangplit.reduce(
      (total, currentItem) => total + currentItem.priceUSD,
      0
    );
    discount = total  * 0.40; // let's say discounted 40% OFF
    console.log(`Discounted:`,discount,`(40% OFF)`);

    // return total; // 73
    return total = total - discount;
  }
  let discount;
  console.log(`Total amount bought:`,calculateTotalCost(itemsBoughtArr, discount));
} catch (error) {
  console.log(`Error an occur:`,error.message)
}

/************************************************/ console.log("\n",spaceMe,"6. Default Parameters",spaceMe,"\n"); /************************************************/
try {
  // function calculateTotalCost(mgaGpangplit, discount = 30) { // doing the default Parameters
  function calculateTotalCost(mgaGpangplit, discount) { // doing the default Parameters

    console.log(
      mgaGpangplit.map((elemento) => {
        return elemento.priceUSD;
      })
    ); // return a new Array usng .map() method

    let total = mgaGpangplit.reduce(
      (total, currentItem) => total + currentItem.priceUSD,
      0
    );
    // set as Default value when false parameters
    if (!discount) {
      discount = total * 0.3; // let's say discounted 30% OFF
    }

    console.log(`Discounted:`, discount, `default parameters (30% OFF)`);

    // return total; // 73
    return (total = total - discount);
  }
  let discount;
  console.log(`Total amount bought:`,calculateTotalCost(itemsBoughtArr));
} catch (error) {
  console.log(`Error an occur:`, error.message);
}

/************************************************/ console.log("\n",spaceMe,"7. The Rest Parameter",spaceMe,"\n"); /************************************************/
// Catching the rest of the arguments
function setPermissionLevel (permissionLevel, ...names) { // rest 
  console.log(names);
  names.forEach( name => console.log(`${name} now has ${permissionLevel} level access.`));
}

setPermissionLevel('admin', 'Dave', 'Sally', 'Mike');

/************************************************/ console.log("\n",spaceMe,"8. The Rest Parameter Challenge",spaceMe,"\nGo to jsAdvance.js file"); /************************************************/
/************************************************/ console.log("\n",spaceMe,"9. Callback Functions",spaceMe,"\n"); /************************************************/
/* Javascript Functions are "first class citizens" 
1-> Functions can be assigned to variables 
2-> We have seen that with function expressions

* -> Functions can be passed as arguments to other functions
*.2 -> We have already seen that several times

Quiz: list some times that we haved passed functions as arguments to other functions.
1. Array methods: map, forEach(), reduce
2. setTimeout and setInterval
3. Event Listeners
*/
try {
  function notifyUser(noticationFn) { 
    noticationFn();
  }
  
  const emailNotification = () => console.log("Email sent");
  const smsNotification = () => console.log("SMS sent");

  notifyUser(emailNotification);
  notifyUser(smsNotification);
} catch (err) {
  console.log('Error an occur:',err.message);
}

/************************************************/ console.log("\n", spaceMe, "10. Super Challenge: Real State", spaceMe,"\nGo back to jsAdvance.js file"); /************************************************/
 