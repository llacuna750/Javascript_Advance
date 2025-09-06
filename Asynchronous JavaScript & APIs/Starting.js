const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n", spaceMe, "1. What is an API", spaceMe, "\nRead the comment"); /************************************************/
/* 
1) What is an API?    
Application Programming Interface

2) How would you describe an API in your own words?
A tool that allows your code to talk with (use the goodness from) 
someone else's code. (Web APIs, 3rd-party package, etc.)

3) Can you think of an example of an API you've used? 
* BoredAPI - https://bored-api.appbrewery.com/ (getting data from a server)
* Local Storage (localStorage)
*/

/************************************************/ console.log("\n", spaceMe, "2. Clients & Servers", spaceMe, "\nRead the comment"
); /************************************************/
/* 
---------------------------------------------------------------- What is a Client? ----------------------------------------------------------------
○ Any device that connects to the internet to get data from somewhere (makes a "request").

- Any device that connects to the internet to get data from somewhere (makes a "request")
○ Laptop, phone, tablet, any "smart" device (watch, doorbell, robot vacuum, even a server!)

------------------------------------- What is a Server? ----------------------------------------------------------------
○ Basically just a computer. Accepts requests from clients asking for something, then responds to the client with that thing 
(e.g., an HTML page, an image or file, or just plain data).

------------------------------------------------------------------------------------------------------------------------
1) What are some examples of "clients" you've used today?
Laptop

Smart Phone

Robot vacuum

Smart plugs

2) How would you explain what a "server" is to a 5-year-old?
A computer that sends my own computer things when I ask it to.

3) In what way do clients and servers interact with each other? 
Client sends a request to a server, and the server sends back a response.
*/
/************************************************/ console.log("\n", spaceMe, "3. Requests & Responses", spaceMe, "\nRead the comment"); /************************************************/
/* What is Requests - Responses Cycle
What is a Request?
-> When a device asks for a "resource" (data, image, HTML page, authentication token, etc.).
-> Requires a connection to the internet.

What is a Response?
-> The reply to the request
-> Could contain the resource (HTML, JSON data, etc.) asked for by the client.
-> Could contain a response saying the client isn't authorized to recieve the resource


1) What are 3 things your computer (client) might request from a server?
JSON array of suggested videos

Video stream

HTML page

2) What is the main job of a server?
Receive a request from a client and return a response.

3) Self study: What would the 3-digit server response code be if the server experiences an internal server error?
500 Internal Server Error
*/

/************************************************/ console.log("\n", spaceMe, "4. JSON Review", spaceMe, "\nRead the comment"); /************************************************/
/* 
- Open JSON lint Validator
- Go to Developer Options  
- then Check Fetch/XHR:
  1. Headers tab
  2. Preview tab 
*/

/************************************************/ console.log("\n", spaceMe, "5. URLS and Endpoints", spaceMe, ""); /************************************************/
console.log(`The makeup of a URL\n📁 The Base URL\n📁 The endpoint \n\nif Scrimba had an API
    📁  The base URL: 
        📁 https://scrimba.com/api
    📁 The endpoints:
        📁 /courses
        📁 /users
        📁 /templates
        📁 /resources/challenges
        📁 /resources/tests?test=typescript


/* Base URL */  
https://apis.scrimba.com/dog.ceo/api  

/* Endpoints */  
/breeds/list/all  
/breeds/image/random  

Challenge:  
1. Take the base url and the endpoint that gets you a list of all dogs and paste the full URL into your regular browser (not the Scrimba mini-browser) and see what you get.  
`);

/************************************************/ console.log("\n", spaceMe, "6. fetch().then()", spaceMe, "\nGo to jsAdvance.js file"); /************************************************/
/************************************************/ console.log("\n", spaceMe, "7. fetch().then() Challenge", spaceMe, "\n"); /************************************************/
/*  
Challenge:  
1. Make a fetch request to the "Bored" API:  
   Base URL: https://apis.scrimba.com/bored/api  
   Endpoint: /activity  

2. Log an object containing an activity suggestion to the console:  
   @ hint.md for help!  
*/
fetch(`https://apis.scrimba.com/bored/api/activity`)
  .then(response => response.json())
  .then(data => console.log(`no. 7:`, data.activity));
/************************************************/ console.log("\n", spaceMe, "8. Fetching with async/await", spaceMe, "\nGo to jsAdvance.js file"); /************************************************/

const getActivityIdea = async () => {
  const response1 = fetch(`https://apis.scrimba.com/bored/api/activity`);
  // const data1 = await response1.json();
  console.log(`Promises (without await):`, (await response1).json);  // try remove await and comment out the data1 & it console first
  // console.log(`\nData:`, data1.activity);  
}
getActivityIdea(); // Call the function

/************************************************/ console.log("\n", spaceMe, "9. Promises", spaceMe, ""); /************************************************/
/*
Promises: 
"We'll let you know within a week"

Pending:
The promises has yet to be completed

Resolved/Fulfilled 
The promise was completed as promised

Rejected:
The promises was not completed as promised
*/
/************************************************/ console.log("\n", spaceMe, "10. Handling Rejected Promises", spaceMe, ""); /************************************************/

const url = "https://apis.scrimba.com/bored/api/activity";
const baseUrl = "https://dog.ceo/api/breeds/image/random";
/*
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data.activity))
.catch((err) => {
  console.error("Fetch failed:", err.message);
  // update the DOM to warn the user
  // access an alternative API
})
.finally(()=> console.log(`The operation completed.`));

*------------------------------------------------------------------------------------------------------*
|   1. Convert the above code to use async/await, handle errors with "try/catch" blocks, and add a     |
|   Challenge:                                                                                         |
|   "finally" block.                                                                                   |
*------------------------------------------------------------------------------------------------------*
*/
const getMessage = async () => {

  try {
    const response = await fetch(baseUrl);
    console.log(response.ok);
    const data = await response.json();
    console.log(`get message:`, data);
  } catch (err) {
    console.log(`Error an occur:`, err);
    throw new Error(`This is a network error!`);
    // update the DOM to warn the user
    // access an alternative API
  } finally {
    console.log(`The operation completed.`);
  }
};

getMessage();

/************************************************/ console.log("\n", spaceMe, "12. Taking APIs to the Next Level", spaceMe, ""); /************************************************/
/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
Remember to handle all errors!
 */
const getJsonPlaceholderApi = async () => {
  try {
    const response = await fetch(`https://apis.scrimba.com/jsonplaceholder/posts`, { method: `post` });
    if (!response.ok) {
      throw new Error(`This is a network error!`);
    }
    const data = await response.json();
    console.log(`Data:`, data);
  } catch (err) {
    console.log("Error an occur:", err.message);
  } finally {
    console.log(`The operation completed. ✔`);
  }
}
getJsonPlaceholderApi();
/* 
Methods
1. GET - getting data
2. POST - posting data
3. PUT - updating data
4. DELETE - deleting data
5. PATCH and OPTIONS
*/
/************************************************/ console.log("\n", spaceMe, "13. API request: the body", spaceMe, ""); /************************************************/
/* Headers contain
💨 Extra (meta) info about the request
💨 Authentication
💨 The type of data being sent
💨 This is not an exhaustive list

Challenge:
1. Add a headers object, setting the "Content-Type" to application/json.

Explanation:
method: Specifies the HTTP method (e.g., POST).
headers: An object where keys are header names and values are header values. Here, 'Content-Type': 'application/json' explicitly sets the content type.
body: The data to be sent in the request body. For JSON, you must use JSON.stringify() to convert your JavaScript object into a JSON string before sending it.
*/
const dataToSend = {
  title: `Holiday Nightmares`,
  body: 'When I was kidnapped in Scotland...',
  userId: 500,
}; // These object can sent into a API database

async function getPostAPI() {
  try {
    const respo = await fetch(`https://apis.scrimba.com/jsonplaceholder/posts`, {
      method: 'post',
      body: JSON.stringify(dataToSend), // can Directly asign inside, the Object
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!respo.ok) {
      throw new Error(`There was a problem with the API!`);
    }
    const data = await respo.json();
    console.log(`\nData gathered: `, data);
  } catch (err) {
    console.log(`Error an occur:`, err.message);
  }
}

getPostAPI();

/************************************************/ console.log("\n", spaceMe, "14. The Promise Constructor - Building Our Own Async Actions", spaceMe, ""); /************************************************/
/*comment
const promise = new Promise((resolve, reject)=> {
  const success = Math.random() > 0.5;
  if (success) {
    resolve(`Operation successful✔`);
  } else {
    reject(`Operation failed🔴`);
  }
});

promise.then(response => console.log(response)).catch(error => {
  console.log(error);
});
*/

/*
Challenge:
1. Get the promise working so it returns "Operation successful!"
  if it resolves and "Operations failed." if it rejects.


promise.then(response => console.log(response)).catch(error => {
  console.log(error);
});
*/
const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve(`Operation successful✔`);
  } else {
    reject(`Operation failed🔴`);
  }
});

try {
  const response = await promise;
  console.log(response);
} catch (error) {
  console.log(error);
}
/************************************************/ console.log("\n", spaceMe, "15. Working with images asynchronously", spaceMe, "\nGo to jsAdvance.js file"); /************************************************/


/************************************************/ console.log("\n", spaceMe, "18. Using Promises to escape Callback Hell", spaceMe, ""); /************************************************/
function uploadFile() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log(`Step 1: Uploading file...`);

      resolve(); // call next step after 3 second
    }, 3000); // log after 3 seconds
  });
}

function processFile() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log(`Step 2 : Processing file..`);

      resolve(); // call next step after 1 second
    }, 1000);
  });
}

function notifyUser() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log(`Step 3: Notifying user...`);

      resolve(); // call next step after 1 second
    }, 1000);
  });
}

/* uploadFile(processingFile(notifyUser)); 
  Expected Output:

  Step 1: Uploading file...
  Step 2: Processing file..
  Step 3: Notifying user...
  All steps completed!
*/

/* Feature:
try/catch()
new Promise
easier to read
neat
easier to debug
*/
try {
  await uploadFile();
  await processFile();
  await notifyUser();
  console.log('All steps completed!');
} catch (err) {
  console.log(err);
}

/************************************************/ console.log("\n", spaceMe, "19. Promise.all", spaceMe, ""); /************************************************/

function createPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // 50% 

    if (success) {
      resolve(`Operation successful✔`);
    } else {
      reject(success);
      reject(`Operation failed🧨`);
    }
  });
}

// Promise.all chada gamiton ni, ug imohang target is dapat ma successfull sila tanan ayha ma resolve.
try {f
  const promise1 = new createPromise();
  const promise2 = new createPromise();
  const promise3 = new createPromise();
  const result = await Promise.all([promise1, promise2, promise3]); 
  console.log(result);
} catch (err) {
  console.log(err)
}
/************************************************/ console.log("\n", spaceMe, "20. Super challenge: Async Image Load", spaceMe, "\nGo to Starting.js file"); /************************************************/
