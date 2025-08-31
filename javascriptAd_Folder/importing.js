const spaceMe = "-".repeat(30);
//Import and Export - A deeper dive
/*import  spaceMe  from "./advancejs.js";*/

import { interplanetaryDestinationsArr as destination, shortSpaceTripsArr as spaceTrip } from "./data.js";
import { interplanetaryDestinationsArr, shortSpaceTripsArr} from "./data.js";
import getMatchingTripsArr from "./getMatchingTripsArr.js";


/************************************************/ console.log("\n\n", spaceMe, "7. Import and Export (name)- ", spaceMe, "\n\n"); /************************************************/
/************************************************/ console.log("\n\n", spaceMe, "7. Import and Export - (default)", spaceMe, "\nGo to importing.js file"); /************************************************/

// console.log(interplanetaryDestinationsArr);
// console.log('Destination: ',destination,'\nTrip: ', spaceTrip);
console.log(getMatchingTripsArr(interplanetaryDestinationsArr, "exotic"));

/* for of 
const num = [10, 2, 50, 3, 5]; 
for (const a of num){
    console.log(a);
} */



/************************************************/ console.log("\n\n", spaceMe, "8.1 Date() Constructors", spaceMe, "\n\n"); /************************************************/
/* Intro to Constructors
Two types of Constructor
    ------Inbuilt-----                                ----Custom-----
*Provide objects in various             *Constructors we design ourselves to produce
predetermined formats, like              objects for our own specific purposes.
Data objects and Error objections,
and Objects for each data type.
*/

// Date() Constructors
const dateSnapshot = new Date();
// console.log(typeof dateSnapshot);
console.log(dateSnapshot);  
console.log(dateSnapshot.toString());
console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`);
/* Challenge: 
1. Search online to find out how we can get just the year using the Date() constructor. Then update the code in the console. */



/************************************************/ console.log("\n\n", spaceMe, "8.2 The Error() Constructor", spaceMe, "\n\n"); /************************************************/
/* The Error() Constructor */
function checkUsername(userName) {
  try {
    if (userName) {
      console.log(userName);
    } 
    else {
      console.log("I execute");
      throw new Error('No username provided');
      console.log("I do not execute");
    }
  } catch (error) {
    console.log("Error an occur:",error.message);
  }
}
checkUsername(); // Blank parameters

String();
Number();
Array();
Object();
Boolean();

// const person =  new Object();
const person = {}
person.name = 'Tom';

console.log(person);



/************************************************/ console.log("\n\n", spaceMe, "9. Pre-increment", spaceMe, "\n\n"); /************************************************/
/* Pre-increment */
let currentTicketNumber = 0;

function getNextTicketNumber() {
  /* Challenge: 1. Move the increment operator to the front of the expression. */
//   return currentTicketNumber++ +1;45555`r
  return ++currentTicketNumber; // same Output
}

// Simulating guests arriving and recieving ticket numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`);
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`);
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`);



/************************************************/ console.log("\n\n", spaceMe, "10. Numeric Separators & BigInt", spaceMe, "\n\n"); /************************************************/
/* Numeric Separators & BigInt */
/* Challenge: 1. Use numeric separators (_) to separate out the digits into chunks of 3 so they are easier to read. */

// const tomsBankBalanceGBP = 9_007_199_254_740_991 * 2; // multiply by 2
const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_345); // bigInt

console.log(typeof tomsBankBalanceGBP);
console.log(tomsBankBalanceGBP);

try {
  console.log(Math.sqrt(tomsBankBalanceGBP));
} catch (err) {
  console.log("Error an occur:", err.message);
} finally {
  // Optional: Code that always executes
  console.log("This block always runs.");
}




/* Hoisting */
/************************************************/ console.log("\n\n",spaceMe, "11. Hoisting", spaceMe, "\n\n"); /************************************************/

function getWeather(){
  return "Today's weather is warm and sunny";
}
console.log(getWeather()); // What will this log?
console.log(getNews()); // What will this log?

function getNews() {
  return "A new swimming pool has opened in the town centre...";
}
try {
  console.log(trafficInfo); // What will this log?
} catch (err) {
  console.log(`Error message:`,err.message);
}
const trafficInfo = 'All roads are busy right now'; 



// Super Challeng: Stock Ticker
/************************************************/ console.log("\n\n",spaceMe,"12. Super Challeng: Stock Ticker",spaceMe,"\nGo to fakeStockAPI.js file"); /************************************************/



// For of - A nicer way of iterating
/************************************************/ console.log("\n\n",spaceMe,"13. For of",spaceMe,"\n\n"); /************************************************/
// characters have multiple (4) Objects
const charaters = [
  {
    title: "Ninja",
    emoji: "🐱‍👤",
    powers: ["agility", "stealth", "aggression"],
  },
  {
    title: "Sorcerer",
    emoji: "🧙‍♂️",
    powers: ["magic", "invisibility", "necromacy"],
  },
  {
    title: "Ogre",
    emoji: "👹",
    powers: ["power", "stamina", "shapeshifting"],
  },
  {
    title: "Unicorn",
    emoji: "🦄",
    powers: ["flight", "power", "purity"],
  }
];

console.log(`Type:`,typeof charaters);
console.log( charaters); // print the array of Objects

/* Challenge: 
  1. Nest a for of inside this for of to iterate over 
  the powers array for each character. Log out each power. 
*/

for (let character of charaters) {
  console.log(character.powers); // print only objects of Power
  // console.log(character); // Print all objects inside the array
  for (let power of character.powers ) {
    // console.log(power); // Accessing the array each character power
  }
}



/************************************************/ console.log("\n\n", spaceMe, "14. for in", spaceMe, "\n\n"); /************************************************/

// We have single Object
const character1 = {
  title: "Ninja",
  emoji: '🐱‍👤',
  powers: ["agility", "stealth", "aggression"],
}

const ninJa = 'Ninja';
try {
  for (const property in character1){ // using for in
    // console.log(property); // Print the key index of Objects  (means it likes printing the index 0 1 2 3)
    console.log(`Object value:`,character1[property]); // print the Object value 
  }

  for (const letter of ninJa){
    console.log(letter);
  }
} catch (err) {
  console.log('Error an occur:',err.message);
}

/*  [for of]     VS     [for in]
  - They both iterate over object data structures
  - Arrays are objects too!

  [ for..in ]                                    [ for..of ]
  - iterates over all enumerable           - iterates over the values of an iterable object.
  property keys of an object               ( examples of iterable objects include arrays, strings) 
*/




/************************************************/ console.log("\n\n", spaceMe, "15.1 .forEach()", spaceMe, "\n\n"); /************************************************/

/* A method for iterating over arrays 
  Challenge:
  1. Nest a forEach to Log out each individual power in each 
  characters powers array.f
*/

charaters.forEach((myChar)=> {
  // console.log(myChar.title,'=',myChar.powers); // same output as For of (only single for of.)
  // console.log(myChar.powers); // same output as For of (only single for of.)

  myChar.powers.forEach((pawer)=> {
    console.log(pawer);
  });
});




/************************************************/ console.log("\n\n", spaceMe, "15.2 another feature of .forEach()", spaceMe, "\n\n"); /************************************************/
charaters.forEach((myChar,index)=> {
  // another feature of .forEach()
  console.log(index,myChar);
});




/************************************************/ console.log("\n\n", spaceMe, "16 .includes() Method", spaceMe, "\nGo to jsAdvance.js file"); /************************************************/
/* A method for checking if an array holds a given value?  
don't forget this function because it is useful for finding 
the equaivalent value of target in array without using for loop
*/

const emojis = ['🦒','🦁','🐼'];
console.log(emojis.includes('🐼')); // return boolean value
 



/************************************************/ console.log("\n\n", spaceMe, "17.1 The .map() Method", spaceMe, "\n\n"); /************************************************/
/* Iterating Over arrays */

const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]; // Elemnents of Array
const conversionFactorMilesToKm = 1.6; // Trying to multiply by it

try {
  const distanceWalkedKmArr = distanceWalkedMilesArr.map(function (distanceMiles, index) {
    // return (distanceMiles * conversionFactorMilesToKm);
    return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`;
  });
  console.log(distanceWalkedKmArr);
} catch (error) {
  console.log(error.message);
}

function converMilesToKms (){
  return distanceWalkedMilesArr.map(function (distanceMiles, index) { //have inner
    // return (distanceMiles * conversionFactorMilesToKm);
    return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`;
  });
}
console.log(converMilesToKms()); // same Ouput from above




/************************************************/ console.log("\n\n", spaceMe, "17.2 The .map() Method Challenge", spaceMe, "\nGo to jsAdvance.js file"); /************************************************/




/************************************************/ console.log("\n\n",spaceMe,"18 The .join() Method",spaceMe,"\nGo to jsAdvance.js file"); /************************************************/
/* Strings from arrays 
- Concatenates elements of array into a string*
- You choose how elements   are separated 
- Returns the new String */
const guestArr = ['Amy', 'Clare', 'Keith', 'Dan'];

// console.log(guestArr); // Printing by default
console.log(guestArr.join(`, `)); // Printing by .join()




/************************************************/ console.log("\n\n", spaceMe, "19. The .filter() Method", spaceMe, "\n\n"); /************************************************/
/* Getting only the elements we want from an array */

const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18];

const adults = ages.filter(function (ages) {
  /* 
  Challenge:
    1. Get rid of the statement and reduce the 
    logic in this function to just one line of code. 
  */
 return ages >= 18; // Adult
//  return ages < 18; // Child
});

console.log(adults); // Output the adults that ages >= 18




/************************************************/ console.log("\n\n", spaceMe, "19.2. The .filter() Method with Objects", spaceMe, "\n\n"); /************************************************/
import {series} from '../javascriptAd_Folder/series.js'; // Imported from series.js

/* Filter and find the specific info. 
Challenge:
1. Use the .filter() method 
to create an array of all the thrillers */

const NewyorkSeries = series.filter(function (show) {
  return show.location === ("New York");
});

const thrillerSeries = series.filter(function (show) {
  return show.genres.includes("thriller");
});

console.log(NewyorkSeries);
console.log(thrillerSeries);




/************************************************/ console.log("\n\n", spaceMe, "20.1 The .reduce() Method", spaceMe, "\n\n"); /************************************************/
/* Give me just one thing */

const rainJanuaryByWeek = [10, 20, 0, 122];
console.log(rainJanuaryByWeek);

const totalRainfallJanuary = rainJanuaryByWeek.reduce((total, currentElement) => {
    console.log("total:", total, "currentElement:", currentElement);
    return total + currentElement;
  }
);

console.log(totalRainfallJanuary);

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73];

/* Challenge:
1. Use the .reduce() method to find the total of all of the students grades 
2. Do some simple maths to log out the class average */ 


const TotaloverAllGrades = grades.reduce(function (tots, addMe) {
  console.log(`Tots: ${tots} addMe: ${addMe}`);
  return tots + addMe;
});

const averagegrades = grades.reduce(function (tots, addMe) {
  return (tots + addMe);
}); 

console.log(grades.length);
console.log(`Total overall grade: ${TotaloverAllGrades}`);
console.log(`The class average is ${averagegrades / grades.length}`);





/************************************************/ console.log("\n\n", spaceMe, "20.2 The .reduce() Method with Objects", spaceMe, "\n\n"); /************************************************/
import { studentsArr } from "./studentsArr.js";

console.log(calcClassAvg(studentsArr));

function calcClassAvg(thisStudents) { 
  /* Previous value: number = thisStudents (Array object)          
    Current Value: currentStudent { name: string; grade: number; } 
    
  reduce(callbackfn: (previousValue: { name: string; grade: number; }, currentValue: { name: string; grade: number; }, 
  currentIndex: number, array: { name: string; grade: number; }[]) => { name: string; grade: number; },
  initialValue: { name: string; grade: number; }): { name: string; grade: number; }*/

  const totalGrades = thisStudents.reduce(function (total, currentStudent) {
    console.log(`total ${total} currentElementonStudent ${currentStudent.grade}`)
    return total + currentStudent.grade; // I think total is the 1st index. So, the total is updating each Iteration when algorithm done.
  }, 0); // currentIndex: number = 0
  console.log("Total Grades:", totalGrades);
  return `Class Average: ${totalGrades / studentsArr.length}`;
}






/************************************************/ console.log("\n\n", spaceMe, "21. For loop Break and Continue", spaceMe, "\n\n"); /************************************************/
// For Loops Revisted - With break and continue
import {expensesAndRefunds} from './expensesAndRefunds.js';

let totalSpent = 0;
const cutOffDate = 2024;

for (let i=0; i<expensesAndRefunds.length; i++){
  const currentExpenseOrRefund = expensesAndRefunds[i];

  // The iteration is Stop because of break statement, it stop in index 5 of Array Objects
  if (currentExpenseOrRefund.year >= cutOffDate){ 
    console.log(`Reach cutoff date, existing loop             ( break )`);
    break;
  }

  if (currentExpenseOrRefund.amount < 0){
    console.log(
      `Skipping ${currentExpenseOrRefund.description} due to refund         ( continue )`
    );
    continue; // skipping the condition if true
  }

  totalSpent += currentExpenseOrRefund.amount; // totalSpent will update when the condition is reach this statement
}
console.log(`The amount spent on items in 2023: $${totalSpent}`);






/************************************************/ console.log("\n\n", spaceMe, "22. Various Array Methods", spaceMe, "\n\n"); /************************************************/
/* .every()  .some()  . )  .findIndex()  .indexOf()  .at() */

const dailyStepsArr = [10000, 12000, 18000, 15000, 11000, 19000, 13000];

// .every() returns true if every item passes the test.
const areAllOver10k = dailyStepsArr.every(function (stepCount) {
  return stepCount >= 10000; // return boolean value : TRUE
});
 
// .some() returns true if one or more items pass the test.
const areSomeOver10k = dailyStepsArr.some(function (stepCount) {
  return stepCount >= 10000; // return boolean value : TRUE
});

console.log(`areAllOver10k  .every():`, areAllOver10k);
console.log("areSomeOver10k .some():", areSomeOver10k);

const invoiceUSDArr = [201, 354, 26, 1299, 1400, 60, 76];
console.log(`\ninvoiceUSD_Array:`,invoiceUSDArr);

// .find() method returns the value of the first item that passes the test.     => value
console.log(
  `Return the value of first Over 1000:`,
  invoiceUSDArr.find((invoice) => {
    return invoice > 1000; // returns the value first one that over 1000 is 1299
  }),`        .find() `
);

// .findIndex() method returns the index of the first item that passes the test.  => index
console.log(`Return the index of first Over 1000:`,
 invoiceUSDArr.findIndex((invoice) => {
    return invoice > 1000; // returns the index 
  }),`        .findIndex() `
);

// .indexOf() gives us the index of a given item in the array.
console.log(`Index of 26:`, invoiceUSDArr.indexOf(26), `                                .indexOf()`);

// .at() takes a positive or negative integer and returns the item at that index.
// Negative integers count back from the end of the array.
console.log(`.at(-1) :`, invoiceUSDArr.at(-1), `                                   .at()`);





/************************************************/console.log("\n\n", spaceMe, "23. string.replace() and string.replaceAll() method", spaceMe, "\n\n");/************************************************/

const paragraph = "js is backbone of the internet. It was created in 1995. Before js, websites were so boring.";
/* Challenge: 
1. Change to lowercase i's to uppercase */

const parGap = paragraph.replace('js', 'JS');
console.log(parGap); // .replace() change the first lowercase js to Uppercase JS 
console.log(paragraph.replaceAll('js', 'JS')); // .replaceAll() change all the lowercase js to Uppercase JS 

const sentence = 'i went to Australia and i saw a shark';
console.log(sentence.replaceAll('i', 'I')); // I went to AustralIa and I saw a shark
/* 
Regex (regular expression) is a sequence of 
characters that specifies a match pattern in text 
*/
const senTence = 'I love you with all my heart love!';
try {
  console.log();
  console.log(
    senTence.replaceAll(
      /\b(love|heart)\b/g,
      // function (match) { console.log(match); // change into undefined

      function () {
        return `💙`;
      }
    )
  );

  const paragraph2nd = "javascript is the backbone of the internet. it was created in 1995. before JS, website were so boring";
  /* Challenge: 
  1. Use replaceAll and regex to ensure the first character of each 
  sentence is uppercase. You will need to use a string method 
which converts characters to uppercase */

  console.log(
    paragraph2nd.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function (match) {
      return match.toUpperCase();
    })
  );
} catch (err) {
  console.log("Error an occur:", err.message); // This will execute when /\b(love|heart)\b/, missing g
}




/************************************************/ console.log("\n\n", spaceMe, "24. Regex flags and constructors", spaceMe, "\n\n");/************************************************/
const text = "Please switch off the Wifi before you leave.";
/* 
g = global
i = case sensitive 
*/
const regex = /wifi/ig;

// The RegExp Constructor
const userInput = "wifi";
const regex2 = new RegExp(userInput, "gi"); // gi = global & case sensitive

try {
  console.log(`regex1:`,regex.test(text)); // return boolean true
  console.log(`regex2:`,regex2.test(text)); // return boolean true
} catch (err) {
  console.log(`Error an occur:`,err.message);
}

