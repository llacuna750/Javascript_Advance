const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n", spaceMe, "1. Short-circuit with OR (||)", spaceMe, ""); /************************************************/
const jobHunter = {
    name: 'Tom Chant',
    jobSearchArea: 'Europe',
}

console.log(jobHunter.jobSearchArea)

// Short-circuit
const workL = jobHunter.jobSearchArea || 'WorldWide';
console.log(`${jobHunter.name}'s work location is ${workL}`)

/* if else  */
// if (jobHunter.jobSearchArea) {
//     console.log(`${jobHunter.jobSearchArea}'s work location is ${jobHunter.jobSearchArea}`);
// } else {
//     console.log(`${jobHunter.name}'s location is Worlwide`);
// }

/* Ternary */
const workLocation = (jobHunter.jobSearchArea) ? jobHunter.jobSearchArea : `Worlwide`;
console.log(`${workLocation}'s work location is ${workLocation}`);

/************************************************/ console.log("\n", spaceMe, "2. Short-circuit with OR (||) Challenge", spaceMe, ""); /************************************************/
const jobHunter2 = {
    // name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
}

/* Challenge:
1. Make it so that if the jobHunter object does not have a 
name property, the username is used instead.
*/

// Complete this line of code 🔰
// const jobSeeker = jobHunter2.name || jobHunter2.username;
console.log(`Hey! ${jobHunter2.name || jobHunter2.username}`); // shortcut short-circuit    



/************************************************/ console.log("\n", spaceMe, "3. Short-circuit with AND (&&)", spaceMe, ""); /************************************************/
const user = {
    userName: 'Tom',
    role: 'admin',
}

// mo excuted ra ni siya ug ang left side is true and atong short-circuit Operator gigamit is &&.  
user.role === 'admin' && console.log('Dashboard Displayed'); 
user.role === 'admin' && greetAdmin();

function greetAdmin() {
    console.log('Hi admin');
}



/*---------------------------------------------*/ console.log("\n", spaceMe, "4. Short-circuiting with AND (&&) Challenge", spaceMe, ""); /************************************************/
/* Challenge:
1. If the passcode passed into authencationCheck exists in swissBankCodeArr,
authenticationCheck should log out accountBalanced.

If the passcode does not exist in swissBankPassCodeArr 
then authencationCheck need not do anything.

⚠ Make sure you short-circuit with && 
hint.md for help!
*/
const accountBalancedUsd = '$45,000,000 🤑💸';
const swissBankCodeArr = [1234, 5678, 9876, 3434];

function authencationCheck (passCode) {
    swissBankCodeArr.includes(passCode) && console.log(`id of ${passCode} have balance of ${accountBalancedUsd}`); // using .includes() method 

    // for (let i=0; i<swissBankCodeArr.length; i++){
    //     swissBankCodeArr[i] == passCode && console.log(`id of ${passCode} have balance of ${accountBalancedUsd}`);
    // }
}

authencationCheck(3434);

/*---------------------------------------------*/ console.log("\n", spaceMe, "5. Nullish Coalescing", spaceMe, ""); /************************************************/
/* Chada gamiton ang short-circuit ug gusto nimo, mag auto completion sa usa ka assigning value, ...  */

function fetchUserBalance() {
    // This is where we would make call to bank's database

    // const userBalance = 10; // set the userBalance to 0;
    const userBalance = 0; // an falsy value
    return userBalance; // comment this line of code.
}   

/* Challenge:
1. Figure what problem this code has and why it's happening.
Don't try to fix anything yet.  

------------- Dili nimo magamit ang falsy Values ug naka short-circuit || lang ka,
              need ka mogamit ug Nullish Coalescing Operator ?? ------------

The ?? Operator
________________
|              |
|- null        |  ??   a truthy value
|- undefined   |  
|______________|

2. Swap the logical OR operator for a Nullish Coaliscing operator.
   Ignore any red lines you see in the editor!
*/

/* Falsy Values in JS
- false
- 0 or -0
- An empty string ("", '', ``)
- null 
- NaN
- 0n
- Undifined
- Document.all (deprecated)
*/

const balance = fetchUserBalance();
const displayBalance = balance ?? "currently not available";

console.log(`Your balance is ${displayBalance}`);

/*******************************************/ console.log("\n", spaceMe, "6. Optional Chaining", spaceMe, ""); /************************************************/
const library = {
    sections: {
        fictions: {
            genres: {
                fantasy: [
                    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
                    { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996 }
                ],

                scienceFiction: [
                    { title: "Dune", author: "Frank Herbert", year: 1965 },
                    { title: "Neuromancer", author: "William Gibson", year: 1984 },
                ]
            }
        }
    }
}

/* Challenge:
1. Use the logical AND operator to log the Hobbit object.
   Notice how undefined is returned if you break the chain.



    ________________________________
    |                              |
    |   Optional Chaining Syntax   |
    |               ?.             |
    |______________________________|
    
    ug dili ka mogamit ug short-circuit && operator or Optional chaining dayun pag ang Object property is dili ma identify,
    mo throw siyay error.
    unlike sa short-circuit && ug Optional chaining syntax mo log ra siya ug ex. output: ----undefined----
*/

const logMe = library && 
library.sections
&& library.sections.fictions
                                && library.sections.fictions.genres
                                && library.sections.fictions.genres.fantasy
                                && library.sections.fictions.genres.fantasy[0].title
;
console.log(`Notice! ug imo re-modify ang Object property using short-circuit or Optional chaining mo output ra syay undefined.`);

console.log(library?.sections?.fictions?.genres?.fantasy?.[0]?.title);
console.log('Log-Me:',logMe);
console.log(library.sections.fictions.genres.fantasy[0].year); // Throw error       



/*******************************************/ console.log("\n", spaceMe, "7. Super Challenge Library Software", spaceMe, ""); /************************************************/

let collection = []; // array storage of where we put the object value.


/* Challenge: Refactor the library System Code.

You are working with a piece of code that handles information 
about books in a library system. The current code is functional 
but can be improved to be more concise and efficient by using 
short-circuiting,
nullish coalescing, and Optional Chaining.

The existing code performs the following tasks:
- Pushes an object with title, author, year published, 
  and availabibility to an array 'collection'

- Provides default values for missing information.
*/

// Example of adding a book
function addBookToCollection (title, author, yearPublished, libraryData) {

    // title; // default values when it's falsy values: Unknown Title
    title = title || 'Unknown Title';

    author = author || 'Unknown Author'; // default values: Not Author

    // yearPublished = yearPublished || 'Not Specified'; // default values: Not Specified
    yearPublished = yearPublished ?? 'Not Specified';

    // let availability = libraryData?.locations?.mainLibrary ? 'Available' : 'Not Available'; 
    let availability = libraryData?.locations?.mainLibrary &&  'Available' || 'Not Available'; 
    console.log(`Availability:`,availability)
    
    /*  */

    // Push the book object to 'collection'
    collection.push({ 
        title: title,
        author: author, 
        yearPublished: yearPublished,
        availability: availability,
    })
}

addBookToCollection('Javascript: The Good Parts', 'Douglas Crockford', 2008, { locations: { 
    mainLibrary: true }}
);

addBookToCollection('', 'William Shakespare', null, null);

addBookToCollection('House of Giants', 'Gemma Small', '', null, { locations: { 
    mainLibrary: null }}
);

console.log(collection); // log the Array Objects collection

/* 
What we Studied:
- Short-circuit with OR (||)
- Short-circuit with AND (&&)
- Nullish Coalescing
- Optional Chaining
*/
