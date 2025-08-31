const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n", spaceMe, "1. Objects and Inbuilt Methods", spaceMe, ""); /************************************************/

const books = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false },
}

console.log(books.b001); // Output undefine
console.log(books); 
console.log(books.b002);

try {
    books.forEach(item => {
        console.log(item);
        // console.log(item.boo3.title);
    })
} catch (error) {
    console.log(error.message);
}

const product = new Object();
product.name = 'Coffee Machine';
console.log(product);

console.log(Object.keys(books)); // Return a Object keys
console.log(Object.keys(books.b001)); // Return a Object keys

/************************************************/ console.log("\n", spaceMe, "2. Objects Methods Challenge", spaceMe, ""); /************************************************/
/* 
Challenge:
1. Use Object.keys to get an array of keys
   You can store it in a const 'bookKeys'.
2. Iterate over bookKeys twice.
   A) First log each individual key in the array.
   B) Then log only the book titles.


Output: b001
        b002
        b003
        b004
Output: To Kill a Mockingbird
        1984
        The Great Gatsby
        Moby Dick

Challenge:
1. Create an array of values using Object.values
2. Iterate over it and log out each book price
*/

const bookKeys = Object.keys(books);
console.log(bookKeys);

bookKeys.forEach(keys => {
    // console.log(keys)
    console.log(books[keys].title); // log out title
});

const oValues = Object.values(books);
// console.log(oValues);

oValues.forEach(item => {
    console.log(item.price); // log out all price
    // console.log(Object.keys(item.title));
})

// [books].forEach((item, index) => {
//     // console.log(item)

//     for (const tTitle in item) {
//         // console.log(item[tTitle]);
//         // console.log(Object.keys(item[tTitle]));
//         [item[tTitle]].forEach(item => {
//             // console.log(item.title); // Very long code to access target Output
//         })
//     }
// });

/************************************************/ console.log("\n", spaceMe, "3. Objects Methods Challenge 2", spaceMe, ""); /************************************************/
/* Object.entries returns an array of arrays, where each inner
   array contains two elements: the key and value of each 
   property on the Object.
*/

const bookEntries = Object.entries(books);
// console.log(bookEntries);

bookEntries.filter(([id, book]) => book.price > 16).forEach(([id, book]) => console.log(`ID: ${id} Book: ${book.title} £${book.price}`)) // Shortcut

const filterCost16 = bookEntries?.filter(less16 => {
    // console.log(``,less16[0]);
    return less16[1].price > 16;

    // console.log(`\n=>:`,less16[0]);

    // const les16Val = Object.values(less16);
    // console.log(`les16Val:`,les16Val);

    // // array method .forEach()
    // less16.forEach(lessT16 => {
    //     // console.log(lessT16);
    //     // console.log(`lessT16:`,lessT16.title);

    //     // console.log(Object.values(lessT16));
        
    //     // const les16Val = Object.values(lessT16);
    //     // console.log(les16Val);
    // });

    // // array method .filter()
    // const lesGret15 = less16.filter (les => {
    //     // console.log(`les:`,les);
    //     // console.log(les.price);
        
    //     return les.price > 16;
    // });

    // // console.log(lesGret15);

    // const destructMe = lesGret15.forEach(les15 => {
    //     // console.log(les15)
    //     const { title, price, isAvailable } = les15;

    //     // console.log('Book:', title,'£'+price); // Copy me!
    // });

    // return less16.filter(target => {
    //     // console.log('target:',target)
    //     return target.price > 16;
    // });
});

// console.log(`filterCost16:`,filterCost16);
filterCost16.forEach(item => {
    const { title, price, isAvailable } = item[1]; // Object destructuring
    // console.log(`ID:`,item[0],'Book:', title, '£' + price); // Long hand proccess
});


/* Challenge:
  1. Use Object.entries to create an array of 'books'.
  2. Use an array method to filter out the books 
   which cost less than 16.
  3. Iterate over the remaining books and log a string 

    for each book in this format: 
    ID: b001 
    Book: To Kill a Mockingbird  £18.99

  Bonus:
  1. Make your code DRYer by destructuring the array 
    where it is passed into a method.
  2. Chain the array methods together.

   Expected Output:
   ID: boo1 Book: To Kill a Mockingbird £18.99
   ID: boo2 Book: Moby Dick £22.5
   
*/

/************************************************/ console.log("\n", spaceMe, "4. Object.hasOwn & .hasOwnProperty()", spaceMe, ""); /************************************************/
const user1 = {
    username: "rpchan",
    subscription: "bronze",
    // accessPremiumFeature: false
}

const user2 = {
    username: "bcstevens",
    subscription: "silver",
    accessPremiumFeature: true
}

// console.log(Object.hasOwn(user1,'accessPremiumFeature')); // return false   
// console.log(user2.hasOwnProperty('accessPremiumFeature')); // return true
try {
    const user3 = Object.create(null); // Pure Object
    user3.username = 'Tom'; // same error/Outcome if 

    console.log(Object.hasOwn(user3, 'username')); // true
    console.log(user3.hasOwnProperty('username')); // Output user3.hasOwnProperty is not a function
} catch (err) {
    console.log(err.message)
}


// kani nga function ga check ug naa bay In adto na Object property.
function canAccessPremiumFeature(userObj, prop) {

    // userObj[prop] // === user1['accessPremiumFeature']
    return Object.hasOwn(userObj, prop) && userObj[prop] || 'Bahog duga';
    // return userObj.hasOwnProperty(prop) 
    // && userObj[prop]
    // console.log(userObj[prop])
    ;      

    /* 
        Challenge: 
        1. Write logic to check if the object has the property. 
        Do this challnge twice, once with hasOwn and once 
        with hasOwnProperty. All the function need do is return 
        a boolean.

        Bonus: use short-circuiting to only return true if 
        'accessPremiumFeature' both exists AND is true.
    */
}

// console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'));
// console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature'));
 
/************************************************/ console.log("\n", spaceMe, "5. Assignment by Value/Reference", spaceMe, ""); /************************************************/
let firstName = 'Tomas';
let newName = firstName;
newName = 'Thomas'; // update to Thomas


// wala ma re-assign ang 'Tomas'
console.log(`firstName`,firstName);
console.log(`newName`,newName);

const names = ['Ben', 'Belen', 'Barbara', 'Betty'];
const updatedNames = names; // para saako nag referrence siya sa array na names
updatedNames[0] = 'Zoeya'; // it will updated the array names and Ben convert to Zoe

const updatedNames1 = names; // para saako nag referrence siya sa array na names
const updatedNames2 = names; // para saako nag referrence siya sa array na names
const updatedNames3 = names; // para saako nag referrence siya sa array na names

console.log(`OG array names`,names);

console.log("update1",updatedNames1); // same Output: Zoeya
console.log("update2",updatedNames2); // same Output: Zoeya
console.log("update3",updatedNames3); // same Output: Zoeya

console.log(`updateNames`,updatedNames);


// Gi-try nako ang console.table()
const gabinfo = {
    firstName: "Gabriel",
    lastName: "Llacuna",
    age: 21,
}

console.log(gabinfo);
console.table(gabinfo);

/*
            Deep Copy                                 vs                               Shallow Copy

            Shallow                                                                       Deep
Create a new object or array,                                           Copies the entire array or Object        
but only at first level. For nested objects                             
or arrays, a shallow copy will still hold references                    
to the original nested objects or arrays.                               
*/



/************************************************/ console.log("\n", spaceMe, "6. ...Spread Operator", spaceMe, ""); /************************************************/
/* Expanding & joining arrays */

try {
    const lunchMenu = ["Greek Salad", "Open Sandwich", "parsnip Soup", "Flatbread and Dip"];
    const dinnerMenu = ["Lasagne", "Strogonoff", "Tagine", "Katsu Curry"];
    // const SweetMenu = ["Mixed Berry Ice Cream", "Chocolate Brownie", "Orange Cheesecake"];

    // shallow copy working
    const SweetMenu = [["Mixed Berry Ice Cream", "ChocolateKo"], "Chocolate Brownie", "Orange Cheesecake"]; // at row 8 and column 0
    


    console.log(...lunchMenu); // Output: Greek Salad Open Sandwich parsnip Soup Flatbread and Dip
    console.log(lunchMenu); // Output: [ 'Greek Salad', 'Open Sandwich', 'parsnip Soup', 'Flatbread and Dip' ]
    

    const eventMenu = [...lunchMenu, ...dinnerMenu, ...SweetMenu];
    eventMenu[8][0] = "Gwapo ko YummyDelecious"; // update

    eventMenu.forEach((name, index) => {
        console.log(index,":",name);
    });
    console.table( eventMenu);  
    console.log("eventMenu:",eventMenu);  
    console.log("SweetMenu:",SweetMenu);  

    const salad1 = {
        name: `green`,
        ingredients: ['lettuce', 'tomatoe']
    }

    const salad2 = {...salad1} // ...spread operator can use a shallow copy

    salad2.name = 'Greek'; // assigning a value?
    salad2.ingredients[0] = 'Cucumber'; 

    console.log('salad1:',salad1); // can't update using re-assigning value
    console.log(`salad2:`,salad2);
    
} catch (err) {
    console.log(err.message);
}

/************************************************/ console.log("\n", spaceMe, "7. ...Spread Operator Challenge", spaceMe, ""); /************************************************/
const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4];
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3];
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8];
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7];

function findPriceExtremes(arr) {
    /*
        Challenge:
        2. Find the highest number from the array and store it in
        the const 'highest'.
        3. Find the lowest number from the array and store it in the
        const 'lowest'.
    */
    // uses Math Class
    const highest = Math.max(...arr);
    const lowest = Math.min(...arr);
    console.log(`The highest average share price was ${highest}`)
    console.log(`The lowest average share price was ${lowest}`)
}

/*
Challenge:
1. Call this function with one array holding
all of the data from the 4 arrays above.
*/
const combineArr = [...averageSharePriceByMonthQ1, ...averageSharePriceByMonthQ2, ...averageSharePriceByMonthQ3, ...averageSharePriceByMonthQ4]
console.table(combineArr);
console.table(combineArr.sort((a, b) => a - b ));

findPriceExtremes(combineArr);


/************************************************/ console.log("\n", spaceMe, "8. Object.assign", spaceMe, ""); /************************************************/
/*
Object.assign()
- Copies properties from a source object to 
a target object
- Returns the new version of the target object  
*/
const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    modulesCompleted: [`html`, `js`, `css`]
}
console.log(studentDetails);
const studentDetailsCopy = {}

/*
            Deep Copy
Copies the entire array or Object 
*/
Object.assign(studentDetailsCopy, studentDetails); // copy the entire Object of studentDetails


/*
Challenge:
1. Prove that what we have created here is a shallow copy
*/

try {
    studentDetailsCopy.modulesCompleted[0] = 'BeelotKaSir'; // can create a shallow copy
    console.table(studentDetailsCopy);
    console.log(studentDetailsCopy.modulesCompleted);    

    // Use object.assign() to update also the original using re-assigning value of duplicated one
    console.log('Original:',studentDetails); // Na update japon ang OG 
} catch (err) {
    console.log(err.message);
}



/************************************************/ console.log("\n", spaceMe, "9. structuredClone()", spaceMe, ""); /************************************************/

const studentDetalye = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    modulesCompleted: [`html`, `js`, `css`]
}

const deepClonedStudentDetails = structuredClone(studentDetalye); 
deepClonedStudentDetails.modulesCompleted[0] = 'TS'; // only affect to cloned one
console.log(studentDetalye); // not affected to shallowing / re-assigning the Object nested array
console.table(deepClonedStudentDetails);

/************************************************/ console.log("\n", spaceMe, "10. Objects with Methods and 'this'", spaceMe, ""); /************************************************/
// this refer to the object property.
try {    
    const gamer = {
        name: 'Dave',
        score: 0,
        incrementScore: () => { //  log Window Object
            // gamer.score++;
            console.log(this);
            this.score++; // this : refer to a current Object property in
        }
    }

    const gamer1 = {
        name: 'Sarah',
        score: 0,
        incrementScore: function() {
            this.score++; // this : refer to a current Object property in
        }
    }

    console.log(gamer);
    gamer.incrementScore();
    console.log(gamer);
    gamer1.incrementScore();
    console.log(gamer1);
} catch (err) {
    console.log(err.message);
}


/************************************************/ console.log("\n", spaceMe, '11. Binding"this"', spaceMe, ""); /************************************************/

const producto = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        // console.log(this);
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`);
    }
}

try {
    // producto.getProductInfo(); 

    // As function Expression
    // const productDetails = producto.getProductInfo; // Cannot read properties of undefined (reading 'name')
    const productDetails = producto.getProductInfo.bind(producto); // use .bind()
    productDetails();    
} catch (err) {
    console.log(err.message);
}


/************************************************/ console.log("\n", spaceMe, '12. Binding"this" Challenge', spaceMe, "\nGo to jsAdvance.js file"); /************************************************/
export default producto;

