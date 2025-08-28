const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n\n\n\n", spaceMe, "1. Creating Objects Explainer", spaceMe, ""); /************************************************/

const product = {
    productName: 'Coffee Machine'
}

console.table(product);

/*
Well see three ways
- Factory functions
- Constructors functions
- Classes
*/

/************************************************/ console.log("\n\n\n\n", spaceMe, "2. Factory Functions", spaceMe, ""); /************************************************/
/* A factory function is a design pattern used in programming, particularly in languages like JavaScript, where a function creates and returns objects. */

// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function() {
//         this.score++;
//     }
// }

// console.log(gamer);
// gamer.incrementScore();
// console.log(gamer);

function gamer(name, score) {
    return  {
        name: name,
        score: score
        ,
        incrementScore: function () {
            this.score++;
        }
    }
}


// Object property value Shorthand
const laro_ero = (name, score) => {
    return {
        name,
        score,
        incrementScore () {
            this.score++;
        }
    }
}


const alice = gamer('Alice', 10);
const dave = gamer('Dave', 3);
const ash = gamer('Ash', 9);
const gab = laro_ero('Gabriel', 21);  // nagamit ang function na ( incrementScore() )  ( gab.incrementScore ) inside the function expression

gab.incrementScore(); // variable that get the return object
console.log(gab); // Log the return object in gab variable

console.table(alice);
alice.incrementScore();
dave.incrementScore();
ash.incrementScore();
dave.incrementScore();

console.log(alice);
console.log(dave);
console.log(ash);



/*
------------------------------------------- Factory Functions -------------------------------------------
============================================ Pros and Cons ============================================
          Pros                                                        Cons
- The syntax is familiar                                        - Less performant 
- The syntax is easy to read                                    - No inheritance
*/
/************************************************/ console.log("\n\n\n\n", spaceMe, "3. Constructor Functions", spaceMe, ""); /************************************************/
const manlalaro = { 
    name: 'Dave',
    score: 0,
    incrementScore: function() {
        this.score++;
    }
}

function Gamer(name, score) {
    this.name = name;
    this.score = score;
    this.incrementScore = function() {
        this.score++;
    }
}

const daved = new Gamer('Dave', 0); // save the name and score as dave
const sarah = new Gamer('Sarah', 2);

console.log(daved);
daved.incrementScore();
console.log(daved);

console.log(sarah);
sarah.incrementScore();
console.log(sarah)

/************************************************/ console.log("\n\n\n\n", spaceMe, "4. Constructor Funtions to Classes", spaceMe, ""); /************************************************/
/*                          Templates of Objects
 classes = (ES6 feature) provides a more structured and cleaner way to 
            work with objects compared to traditional constructor functions 
            ex. static keyword, encapsulation, inheritance
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productInfo = () => {
        console.log(`\nThe Product: ${this.name} and the Price: ${this.price}`);
    }


    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2) }`);
    }

    // The algorithm to get TotalSale including Sale Tax
    calcualteTotal(salesTax) {
        return this.price + (this.price * salesTax); // formula: return the total calculation
    }
}

const product1 = new Product("Shirt", 19.99); // for Shirt product
const product2 = new Product("Pants", 22.50); // for Pants
const product3 = new Product("Underware", 100.00); // for Underware product

product2.displayProduct();

const saleTax = 0.05; 
const total = product3.calcualteTotal(saleTax); 
product3.productInfo();
console.log(`Total price (with tax): ${total.toFixed(2)}`);

/************************************************/ console.log("\n\n\n\n", spaceMe, "5. Constructor Funtions to Classes Challenge", spaceMe, ""); /************************************************/
/*
    Challenge:
    Rebuild this constructor function as a class.
*/

// function Character(name) {
//     this.name = name;
//     this.collectedItemArr = [];

//     this.addItem = function(item) {
//         this.collectedItemArr.push(item);
//         console.log(`${this.name} now has: ${this.collectedItemArr.join(', ')}`);
//     }
// }

// From Constructor Functions converted to Class
class Characterr {
    constructor(name) {
        this.name = name;
        this.collectedItemArr = [];
    }

    addItem = (item) => {
        this.collectedItemArr.push(item);
    }

    displayLive_Item() {
        console.log(`${this.name} now has: ${this.collectedItemArr.join(', ')}`);
    }
}


const wizard = new Characterr('Gabriel'); // wizard is si Gabriel
const witch = new Characterr('Chikarnd'); // witch is si Chikarnd

wizard.addItem('Shabu'); // Add a item on wizard
wizard.addItem('Marijuana'); // Add a item on wizard

witch.addItem('Bowl of witch craft');
witch.addItem('magic silhig');
// display what Item add in collectedItemArr
wizard.displayLive_Item();
witch.displayLive_Item();

/************************************************/ console.log("\n\n\n\n", spaceMe, "6. .call() and .apply() ", spaceMe, ""); /************************************************/

function displayPolitician(currentSituation) {
    // console.log(this); // look at console (only in Browser)
    console.log(`${this.name} is ${this.age} years old. Current situation: ${currentSituation}`);
}

const politician1 = {
    name: 'Carly Fowler',
    age: 40
}

const politician2 = {
    name: 'Gabriel',
    age: 21
}


try {
    // displayPolitician('Gabriel', 21, "nag-Lulu");
    // displayPolitician.call(politician1, 'nag Lu2'); // .call() method
    // displayPolitician.apply(politician2, ['Study Hard']); // .apply() method

    // displayPolitician();    
    displayPolitician.apply(politician1, ['In jail for corruption']); // array .apply()
    displayPolitician.call(politician2, 'Resigned due to incompetence'); // non-array .call()
} catch (err) {
    console.log(`Error an occur:`, err.message);
}

/************************************************/ console.log("\n\n\n\n", spaceMe, "7. Inheritance Explainer ", spaceMe, ""); /************************************************/  
/* Inheritance is the mechanism by which objects inherit properties and methods from other objects */

const baseEvent = {
    name: '',
    date: '',
    location: '',
    getDetails: function() {
        
    }
}

const concert = {
    // name: '',
    // date: '',
    // location: '',
    // getDetails: function () {}, 

    // inherits name, date, location, getDetails from baseEvent
    
    headLiner: '',
}
/*
"
Polymorphism allows methods to have different 
implementations on different objects. An object can override a method it inherits,
adapting it for specific needs. "
*/

console.log(baseEvent);
/*
    The Prototype Chain
|-----------------|         |-----------------|         |-----------------|         |-----------------|
|   The Object    |         |    Object 1     |         |    Object 2     |         |    Object 3     |
|     object      | ----->> |                 | ----->> |                 | ----->> |                 |  
|    built-in     |         |   Properties    |         |   Properties    |         |   Properties    |
|    methods      |         |    methods      |         |    methods      |         |    methods      |
|-----------------|         |-----------------|         |-----------------|         |-----------------|
*                                Prototype:                  Prototype:                  Prototype:
*                                  Object                      Object 1                    Object 2
*/

/************************************************/ console.log("\n\n\n\n", spaceMe, "8. Inheritance with Constructor Functions ", spaceMe, ""); /************************************************/  

function Event(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;

    // get the Property functions of getDetails() by prototyping inheritance.
    this.getDetails = function() {
        return `Event ${this.name}, Location: ${this.location}, Date: ${this.date}`;
    }
}

function Concert(name, location, date, headliner) {
    Event.call(this, name,  location, date)
    this.headliner = headliner;
}

Concert.prototype = Object.create(Event.prototype);
Concert.prototype.constructor = Concert; 

const concert1 = new Concert('GabReal', 'bdS', '2025-08-11', 'The Electrons');
console.log(concert1);
// console.log(concert1.getDetails());

/************************************************/ console.log("\n\n\n\n", spaceMe, "9. Polymorphism with constructor functions ", spaceMe, ""); /************************************************/  
/* Overriding Inherited Methods on Constructor functions 
same code as above.
*/

function EventNow(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;

    // get the Property functions of getDetails() by prototyping inheritance.

    // Challenge:
    // this.getDetails = function () {
    //     return `Event ${this.name}, Location: ${this.location}, Date: ${this.date}`;
    // }
}

/* naka-create ug new Function called cancelEvent in every chile of Parent EventNow Constructor 
    allow a child to overriden the methods
*/
EventNow.prototype.cancelEvent = function() {
    return `Event Cancelled`;   
}

function Concertto(name, location, date, headliner) {
    EventNow.call(this, name, location, date)
    this.headliner = headliner;

    // this.getDetails = function() {}
}

/* 
Challenge:
1. Remove getDetails from the EventNow constructor's body 
  and it to the Event constructor's prototype.
*/
// ki-bali function expression in memory Obeject object
EventNow.prototype.getDetails = function () {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
}


Concertto.prototype = Object.create(EventNow.prototype);
Concertto.prototype.constructor = Concertto;

// 
Concertto.prototype.getDetails = function () {
    const eventBasics = EventNow.prototype.getDetails.call(this);
    return `${eventBasics} Headliner: ${this.headliner}`;
}

const concertt = new Concertto('Summer Beats', 'bdS', '2025-08-11', 'The Electrons');
const concertt2 = new Concertto('Concert Two', 'Highlands Park', '2024-08-08', 'Dab Notes');
const concertt3 = new Concertto('Concert Three', 'Highland Park', '2024-08-08', 'Dave Notes');


try {
    // console.log(concertt);
    // console.log(concertt2);
    // console.log(concertt3);

    console.log(concertt.getDetails()) // it like's the instance of Child Object the .getDetails() method
    console.log(concertt2.getDetails());
    console.log(concertt3.getDetails());
} catch (error) {
    console.log(error.message)
}

/************************************************/ console.log("\n\n\n\n", spaceMe, "10. Inheritance with constructor functions Challenge ", spaceMe, ""); /************************************************/  
function EventCha(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
}

// gi-himoan ug function as prototype Object memory called it to getDetails.
EventCha.prototype.getDetails = function() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
}

function Conference(name, location, date, keynoteSpeaker) {
    EventCha.call(this, name, location, date) // gi-inherit ang property name, location, date gikan sa Parent, and gipang assign as the creating Object in Constructor
    this.keynoteSpeaker = keynoteSpeaker;
}


// const keynoteSpeaker = {
//     name: 'Gabreal',
//     location: 'CDO',
//     date: '2025-08-11'
// }

Conference.prototype = Object.create(EventCha.prototype); // this  will inheritance the parent EventCha    ||    si Conference naka prototype sa Event.prototype
Conference.prototype.constructor = Conference;            // this  will inheritance the parent EventCha    ||    si Conference naka prototype sa Event.prototype


Conference.prototype.getDetails = function () {
    const eventBasics = EventCha.prototype.getDetails.call(this); 
    return `${eventBasics} Keynote Speaker: ${this.keynoteSpeaker}`;
}


/*
Challenge:
1.  Set up a constructor for 'Conference' which
    should take in 'keynoteSpeaker' as a parameter.

2. 'Conference' should inherit from 'Event'.

3. 'Conference' should have its own method 'getDetails'
    which calls Event's getDetails method and returns a string 
    with same, location, date, and keynote speaker.

4. When you set up an instance of Conference and call
    getsDetails you should log out:
    Event: 10 Nights of JS, Location: Scrimba HQ, Date: 2025-09-29 Keynote Speaker: Ashley Smith
    📝 The new method should be on the prototype.
*/

const conference = new Conference('10 Nights of JS', 'Scrimba HQ', '2025-09-29', 'Ashley Smith');
console.log(conference.getDetails());

/************************************************/ console.log("\n\n\n\n", spaceMe, "11. Inheritance with Classes Syntax ", spaceMe, ""); /************************************************/
// Mas tsada pani ang Inheritance with Classes kaysa Inheritance with constructor functions kay mag gamit2 pakag prototype 
class Ebent {
    constructor(name, location, date) {
        this.name = name;
        this.location = location;
        this.date = date;
    }
    
    getDetails() {
        return `Event ${this.name}, Location: ${this.location}, Date: ${this.date}`;
    }
}

/*
The "super" keyword
-01 Access properties on the superclass prototype
-02 invoke the superclass's constructors
*/

class Consert extends Ebent {
    constructor(name, location, date, headliner) {
        // superclass constructor (implementation )
        super(name, location, date);
        this.headliner = headliner;
    }
    
    getDetails() {
        const eventBasics = super.getDetails();
        return `Event: ${eventBasics} Headliner: ${this.headliner}`;
    }
}

const consert = new Consert("Summer Beats", "City Stadium", "2023-07-15", "The Electrons New");
console.log(consert.getDetails());

/************************************************/ console.log("\n\n\n\n", spaceMe, "12. Inheritance with classes Challenge ", spaceMe, ""); /************************************************/

class Eyvent {
    constructor(name, location, date) {
        this.name = name;
        this.location = location;
        this.date = date;
    }

    getDetails() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
    }
}
/*
Challenge:
1. Set up a class 'TennisMatch' which should take in 'player1' and 'player2' as parameters.

2. 'TennisMatch' should inherit properties and methods from 'Event'.

3. 'TennisMatch' should have its own method 'getDetails' which calls Event's getDetails method to get the basic details of the event. 
   It should return this string:
   ${eventBasics} Match: ${this.player1} vs ${this.player2}

4. Uncomment my code below to create a new instance of TennisMatch and call the getDetails method.
   Hint.md for help
*/

class TennisMatch extends Eyvent {
    constructor(name, location, date, player1, player2) {
        super(name, location, date);
        this.player1 = player1;
        this.player2 = player2;
    }

    getDetails() {
        const eventBasics = super.getDetails();
        return `${eventBasics}, Match: ${this.player1} vs ${this.player2}`;
    }
}

const tennisMatch = new TennisMatch("Grand Slam Final", "Wimbledon", "2025-07-15", "J Bloggs", "B Doe");
console.log(tennisMatch.getDetails());

/************************************************/ console.log("\n\n\n\n", spaceMe, "13. Static methods and properties", spaceMe, ""); /************************************************/

class Employee {
    static employeeCount = 0;
    
    constructor(name) {
        this.name = name;
        Employee.employeeCount++;
    }
    
    getEmployeeCount() {
        return  Employee.employeeCount;
    }
}
let employee1 = new Employee("Alice");
let employee2 = new Employee("Bob");
let employee3 = new Employee("Smith");

console.log('employeeCount:',Employee.employeeCount);
console.log(employee2.getEmployeeCount());

/************************************************/ console.log("\n\n\n\n", spaceMe, "14. Static methods Challenge", spaceMe, ""); /************************************************/

class Employyee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    static getNewIntern(name, role) {
        const myphdate = new Date();
        const localTime = myphdate.toDateString();
        const localTime2 = myphdate.toLocaleTimeString();   

        const startDate = `${localTime}, ${localTime2}`;
        return {
            name, 
            role,
            startDate: startDate
        }
    }

    label_as_Gwapo() {
        console.log(Employyee.getNewIntern(this.name, this.role));
    }
}

/*
Challenge: 
1. Set up a static method called getNewIntern.
    getNewIntern should return an object with a 'name' property,
    a 'role' property which is hard-coded to 'intern', and a 
    'startDate' property which should be the time of code 
    execution.

    (How can you use JS to get the time right now?)
*/

// const dateNow = new Date();
// console.log(dateNow.getFullYear().toString());

try {
    // Employyee.gwapoKo();
    // Employyee.gwapoKo();
    // console.log(Employyee);
    
    const gabVs = new Employyee('Gabriel', 'Tig-ayo ref');
    gabVs.label_as_Gwapo();
    // console.log(Employyee.getNewIntern('Gabriel', 'Intern'));

} catch (err) {
    console.log(err.message);
}



/************************************************/ console.log("\n\n\n\n", spaceMe, "15. Private Fields", spaceMe, ""); /************************************************/
// the operator of private fields is # sign
class Holiday {
    #destination; // this is unneccessary to add when you not accessing or modifying outside the class. else add it

    constructor(destination, price) {
        this.#destination = destination; // can't log the destination property if use # operator or privating fields.
        // this._destination = destination; 
        this.price = price;
    }
}

try {
    const safari = new Holiday('Kenya', 1000);
    
    safari._destination = "Cagayan"; // it set private the destination
    // safari.#destination = "Tanzania";
    // safari.#destination = "Philippines"; // SyntaxError: Private field '#destination' must be declared in an enclosing class
    console.log(safari);
} catch (error) {
    console.log(error.message);
}




/************************************************/ console.log("\n\n\n\n", spaceMe, "16. Getters and Setters", spaceMe, ""); /************************************************/

class HolidayExample {
    #destination; // private fields
    constructor(destination, price) {
        this.#destination = destination; // can't log the destination property if use # operator or privating fields.
        // this._destination = destination; 
        this.price = price;
    }

    get destination(){
        return this.#destination;
    }

    set destination(newDestination) {
        if (typeof newDestination !== 'string' || newDestination.length <= 0) {
            throw new Error('Destination not valid!');
        }
        this.#destination = newDestination;
    }
}
try {
    const sapari = new HolidayExample('Kenya', 1000);

    // sapari.destination = 'Philipines';
    sapari.destination = "USTP";
    console.log(sapari.destination);    // USTP
    console.log(sapari);                // HolidayExample { price: 1000 }
    // console.log(safari.#destination); // SyntaxError: Private field '#destination' must be declared in an enclosing class
} catch (err) {
    console.log(err.message);
}



/************************************************/ console.log("\n\n\n\n", spaceMe, "(from web). What are iterators and iterable protocols?  https://blog.logrocket.com/iterator-helpers-es2025/?ref=dailydev", spaceMe, ""); /************************************************/
const arr = [10, 20, 30];
const iter = arr[Symbol.iterator]();


console.log(iter.next().done); // { value: 10, done: false }
console.log(iter.next()); // { value: 20, done: false }
console.log(iter.next()); // { value: 30, done: false }
console.log(iter.next()); // { value: undefined, done: true }



/************************************************/ console.log("\n\n\n\n", spaceMe, "17. Getters and Setters Challenge", spaceMe, ""); /************************************************/
/*
    1. Make 'price' a private field
    2. Create a getter for price which appends a $ sign
        to the front and displays it to a max of 2 decimal 
        places.
    3. Create a setter for price which updates price with a 
        new price.
    4. Test!
*/
class HolidayChallenge {
    #destination; // private fields
    #price;

    constructor(destination, price) {
        // this._destination = destination; 
        this.#destination = destination; // can't log the destination property if use # operator or privating fields.
        this.#price = price;
    }

    // Getters & Setters of destination property
    get destination() {
        return this.#destination;
    }

    set destination(newDestination) {
        if (typeof newDestination !== 'string' || newDestination.length <= 0) {
            throw new Error('Destination not valid!');
        }
        this.#destination = newDestination;
    }


    // Getters & Setters of price property
    get price() {
        return `$${this.#price.toFixed(2)}`;
    } 

    set price(newPrice) {
        if (typeof newPrice !== 'number' || newPrice < 0) {
            throw new TypeError(`Price must be a non-negative number. Got: ${newPrice}`);
        }
        this.#price = newPrice; 
        
        // Use helper validation
        // const newPresyo = this.valid0(newPrice) ?? this.inValid();
        // console.log("Validated price:", newPresyo);
        // this.#price = newPresyo;  // ✅ fixed (was setting destination before)
    }

    // Validation helpers
    // inValid() {
    //     throw new Error('Invalid new presyo');
    // }

    // valid0(presyo) {
    //     return (typeof presyo === 'number' && presyo >= 0) ? presyo : null;
    // }

    toString() {
        return `HolidayExample: The budget when you go in ${this.#destination} is $${this.#price}.`;
    }
}

try {
    const trip = new HolidayChallenge('Uptown SM', 50);
    trip.price = 1000;
    // c.price = 'price invalid';

    console.log(trip.price);
    console.log(trip);
    console.log(trip.toString());
} catch (err) {
    console.log(err.message);
}



/************************************************/ console.log("\n\n\n\n", spaceMe, "18. Super Challenge: Game Characters", spaceMe, ""); /************************************************/

class Character {
    name;
    #health;
    #isAlive;

    static #Charactercount = 0;

    constructor(name, initialHealth = 100) {
        this.name = name;

        if (typeof initialHealth !== 'number' || initialHealth < 0) {
            throw new Error("Initial health must be a non-negative number!");
        }

        this.#health = initialHealth;

        if (this.#health > 0) {
            this.#isAlive = true;
        }
        
        Character.#incrementCount();
    }


    static #incrementCount() {
        return Character.#Charactercount++;
    }

    static getCount() {
        return Character.#Charactercount;
    }


    // Getter & Setters of health
    get health() {
        return this.#health;
    }

    
    set health(newhealth) {
        // this.#health = Math.max(0, newhealth); // shortcut for code below!

        if (typeof newhealth !== 'number') {
            throw new Error("health must be a number!");
        }

        this.#health = newhealth;

        if (this.#health < 0) {
            this.#health = 0;
            throw new Error("Health cannot be negative!");
        }
    }


    takeDamage(damageAmount) {
        if (typeof damageAmount !== 'number') {
            throw new Error('Damage must be a number!')
        }

        this.#health -= damageAmount;

        if (this.#health < 0) {
            this.#health = 0; // dead, cannot go negative
            this.#isAlive = false;
        }

        return this.#health;
    }


    get isAlive() {
        // return this.#isAlive;
        return this.#health > 0;
    }


    getStatus() {
        const status = (this.#health > 1) ? `${this.name}, current Health is ${this.#health} HP, and it is still can fight` 
            : (this.#health === 1) ? `Tsk! Tsk! ${this.name}, ang life nimo is ${this.#health} HP nalang, isa nalang ka huyop nimo patay naka!` 
            : `${this.name}, current Health is ${this.#health} HP, dead!`;
        return status;
    }

    /* Base Character Class
        Your task to design and implement a Character Class with properties 'name' (a string), 'health' 
        (a number), and isAlive (a boolean). This class will serve as a foundation for a simple game or 
        simulation where characters can take damage and possibly "die" if their health reaches zero.
        
        
        Class Structure:
        Your class should have:
        - a name property that is set through the constructor.  
        - a private health property initialized to 100.
        - a static property count to track how many characters have been created.


        Static Methods to add:
        - incrementCount() to increase the count each time a new character is instantiated.
        - getCount() to return the current number of characters.
        
        
        Health Management:
        - Include a getter and a setter for health. The setter should ensure that the health value does not 
        fall below zero.


        Damage Functionality:
        - Implement a method 'takeDamage' which decreases the health value by a specified amount.


        Alive Status:
        - Implement a getter for 'isAlive' that returns a boolean value. A character is considered alive if 
        their health is greater than zero.


        Status Report:
        - Implement a method getStatus() that returns a string stating the character's name, 
        current health, and whether they are alive or dead.


        Completed?   check! 
    */
}


class Hero extends Character {
    #inventory = [];

    constructor(name) {
        super(name);
        this.#inventory;  
    }

    pickUpItem(itemPickUp) {
        this.#inventory.push(itemPickUp);
    }

    getItems() {
        console.log(`\nList Item:`);

        return `${this.name} has the following items: ${this.#inventory.join(", ")}`  // Tom Chant Version

        return this.#inventory.map((item, index) => {
            return `${index + 1}: ${item}\n`;
        }).join("");    // My Version.
    }
    /* The Hero class
        The Hero class should inherit from Character. This new class should include additional 
        functionality to manage an inventory of items that the hero can collect during gameplay.

        Constructor:
        - The constructor for the Hero class should initialize the hero with a name and an empty inventory 
        for items.


        Inventory Management:
        - Implement a method pickUpItem that allows the hero to add items to their inventory.
        - Items should simply be added to an array.

        
        Item Retrieval:
        - Implement a method getItems that returns a string listing all the items in the hero's inventory.
    */
}


class Villain extends Character {
    #threat;

    constructor(name, threat) {
        super(name);
        this.#threat = threat;
    }

    getThreat() {
        // return this.#threat;
        return `${this.name}  ->  ${this.#threat}`;
    }
    /* The Villain class
    The Villain class should inherit from Character. This new class should include additional 
    functionality to allow the villain to issue a threat.

    Constructor:
    - The constructor for the Villain class should initialize the villain with a name and a threat.

    Threat
    - The getThreat method should simply return the threat.
    */
}

try {
    const c1 = new Character(`Dabvs`);
    new Character(`Daniel Padaplin`);
    new Character(`Hacky`);

    console.log(c1);
    c1.health = 2;
    // c1.health = -1;                              // Health cannot be negative!
    console.log(`Health set to: ${c1.health}`);
    console.log(c1.getStatus());
    console.log(Character.getCount());
    console.log(Character.Charactercount);          // undefined

    // Example Usage
    const merlin = new Hero("Merlin");
    merlin.pickUpItem("Sword");
    merlin.pickUpItem("Higher Seal");
    console.log(merlin.getItems());


    // const medea = new Hero("Medea");
    const troll = new Villain("Troll", "I will destroy your soul!");

    console.log(troll.getThreat()); // I will destroy your soul!
    // merlin.pickUpItem("Sword");
    // merlin.takeDamage(15);
    // medea.takeDamage(5);
    // medea.pickUpItem("Shield");

    // console.log(merlin.getItems()); // Merlin has the following items: Sword
    // console.log(medea.getItems()); // Medea has the following items: Shield
    // troll.takeDamage(101);
    // console.log(troll.getStatus()); // Troll has 0 health and is dead.
    // console.log(medea.getStatus()); // Medea has 95 health and is alive.
    // console.log(merlin.getStatus()); // Merlin has 85 health and is alive.
    console.log(`Total characters created: ${Character.getCount()}`); // Total characters created: 3
} catch (err) {
    console.log(err.message);
}