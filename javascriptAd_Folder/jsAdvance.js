import getStockData from "./fakeStockAPI.js";

const spaceMe = "-".repeat(30);
document.title = "JavaScript Advance";

const pogi = $("#gwapoq");
const h3 = $(".thisish3");

pogi.style.color = `gold`;
h3.style.color = `red`;

function $(s) {
  return document.querySelector(s);
}



/***********************************************/ console.log("\n", spaceMe, "4. setTimeout", spaceMe, "\n"); /*===*=====================================*/
/* setTimeout() */
const myans = $("#myAnswer");
const seconds = $(`.seconds`);
let myChoice = $(".choice");
let result = $(".result");
const mySagot = "Lima";

console.log(myans);
let count = 10;

setTimeout(displayAnswer, 2000, mySagot);

setTimeout(() => {
  myChoice.style.display = "block";
}, 3500);



function displayAnswer(answer) {
  console.log("running...");
  console.log("Your answer: " + answer);
  myAnswer.innerHTML = answer;

  const stopMe = setInterval(() => {
    if (count < 1) {
      setTimeout(logAnswer, 1000, answer, 10);
      clearInterval(stopMe);
      myChoice.style.display = "none";
    }

    seconds.innerHTML = count;
    // console.log(`Are u sure in your answer?: `, count); // Uncomment this if you want to log count down to your console
    count--;
  }, 1500);

  // buttons
  const buttonYes = $(`#buttonYes`);
  const buttonNO = $(`#buttonNo`);
  const cancel = $(`.canceled`);
  const countStat = $(`.countStat`);
  const countMe = $(`.countMe`);

  buttonYes.onclick = () => {
    setTimeout(logAnswer, 1500, answer, 10);
    clearInterval(stopMe);
    myChoice.style.display = "none";
  };

  var count = 20;
  let cancelList = ["Cancelinging.", "Cancelinging..", "Cancelinging..."];
  let i = 0;

  buttonNO.onclick = () => {
    myAnswer.innerHTML = "";
    clearInterval(stopMe);
    myChoice.style.display = "none";

    const tamaNa = setInterval(() => {
      // countStat.innerHTML = "I: " + i; // Temp
      // countMe.innerHTML = "Count: " + count; // temp

      if (count < 1 && i >= cancelList.length - 1) {
        clearTimeout(tamaNa);
        // countStat.innerHTML = "Final I: "+i; // temp
      }

      if (i <= cancelList[i].length - 1) {
        cancel.innerHTML = cancelList[i];
        cancel.style.fontWeight = "bold";
        i += 1;

        if (count > 0) {
          count -= 1;
        }
      }

      if (i > cancelList.length - 1) {
        // exe on cancel 2
        i = 0;
      }
    }, 500); // run every 1 second
  };
}

function logAnswer(answer, points) {
  if (answer === "Lima") {
    console.log(
      `The answer is ${answer} of course! If you got that right, giver yourself ${points} points`
    );
    result.innerHTML = `The answer is ${answer} of course! If you got that right, giver yourself ${points} points✔`;
  } else {
    console.log("Incorrect answer");
    result.innerHTML = `Incorrect answer`;
  }
}




/***********************************************/ console.log("\n", spaceMe, "5. setInterval", spaceMe, "\n"); /*===*=====================================*/
/* setInterval() */

const startShut = document.getElementById("startShutdownMe");

let secondRemaining = 3;

startShut.onclick = function () {
  const deviceName = "Macbook"; // Define deviceName here
  const logoutPrompt = confirm("Do you want to Log out?");

  if (logoutPrompt) {
    const startSC = setInterval(() => {
      if (secondRemaining < 0) {
        clearInterval(startSC);
        console.log(`Your ${deviceName} is Shutdown.`);
      } else {
        console.log(
          `Your ${deviceName} will shut down in ${secondRemaining} seconds`
        );
        secondRemaining -= 1;
      }
    }, 1000);
  }
};

//Import and Export - A deeper dive
console.log(
  "\n",
  spaceMe,
  "6. Import and Export",
  spaceMe,
  "\nGo to importing.js file"
);




/***********************************************/ console.log("\n", spaceMe, "12. Super Challeng: Stock Ticker", spaceMe, "\n"); /*===*=====================================*/
// 12. Super Challeng: Stock Ticker

setInterval(() => {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 1000);

let prevPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = $("#name");
  const stockDisplaySymbol = $("#Symbol");
  const stockDisplayPrice = $("#price");
  const stockDisplayTime = $("#Time");
  const stockDisplayPriceIcon = $("#PriceIcon");

  const { name, sym, price, time } = stockData;

  const priceDirectionIcon =
    price > prevPrice
      ? `GreenArrow.svg` // ✅ Green when price increased
      : price < prevPrice
        ? `RedArrow.svg` // ✅ Red when price decreased
        : `GreyArrow.svg`; // ⚪ Grey when price unchanged

  const priceIconElement = document.createElement("img");
  priceIconElement.src = `javascriptAd_Folder/svg/${priceDirectionIcon}`; // Pwede na dili i-apil ang root sa Folder sa file [rootFile: Javascript_Advance]
  priceIconElement.alt = "Price direction icon";
  priceIconElement.style.width = `30px`;

  // Clear previous icon and add new one
  stockDisplayPriceIcon.innerHTML = "";
  stockDisplayPriceIcon.appendChild(priceIconElement);

  stockDisplayName.innerText = name;
  stockDisplaySymbol.innerText = sym;
  stockDisplayPrice.innerText = `${price}`;
  stockDisplayTime.innerText = time;

  prevPrice = price;
}

/* Javascript Use: (in Making View QtechAI web status)
  import /export
  Date()
  Math()
  setInterval()
  The ternary operator
  Object destructuring
*/

console.log("\n", spaceMe, "15 .includes()", spaceMe, "\n");

/* A method for checking if an array holds a given value?  */
const emojis = ['🦒', '🦁', '🐼'];
console.log(emojis.includes('🐼')); // return boolean value




/************************************************/console.log("\n\n", spaceMe, "25. Super Challenge: Contact Search", spaceMe, "\n\n");/*=======================********************************/

const shoppingList = []; // Our Container of Shopping List
console.log(`ShoppingList empty?`, shoppingList.length === 0); // Check if the shoppingList is Empty


const addItemButton = $(`#addButton`);
const itemInput = $("#itemName");
const list = $("#list");



let numThat = shoppingList.map((disNum) => {
  return disNum * 5; // Multiply the Array Element by 5
});


addItemButton.onclick = () => {
  /* Challenge: 
  1. Add an if else to the event listener's function.
  2. Only add an item to the shoppingList array if it 
    is not already in the shoppingList array.
  3. If an item is a duplicate, clear the field and log out "no duplicates". */

  if (!shoppingList.includes(itemInput.value) && !itemInput.value.trim() == "") {
    shoppingList.push(itemInput.value);
    render();
    console.log("NumThat:", shoppingList);
  } else if (itemInput.value.trim() === "") {
    alert(`Can't add Blank items.`);
    console.warn(`Can't add Blank items.`);
    console.log(shoppingList);
  } else {
    alert(`no duplicates `);
    console.warn("no duplikit plis.");
  }
  itemInput.value = ""; // remove last item Add
}

function render() {
  let html = '';
  for (let item of shoppingList) {
    html += `<li class="w-100 py-0 px-2 m-2 list-unstyled text-black rounded bg-light">${item}</li> `;
    console.log("Item add: ", item);
  }
  list.innerHTML = html;
}
/* Implements on Shopping List:
  1. Array of ShoppingList
  2. onclick (arrow function) Event handler
  3. Render function (that can add Items the ShoppingList)
  4. 💸) method to identify if the item is already exists. 
*/




/***********************************************/ console.log("\n", spaceMe, "16.2 The .map() Method Challenge", spaceMe, "\n"); /*===*=====================================*/
/* Iterating Over arrays */

/* Copy & Paste this one later */

const containerPlaylist = $(`#playlistSong`);
import { playlistArr } from "./playlist.js"; // We import the playlistArr from playlist.js file
const playlistHTML = []; // PlayList Array

// id: playlistSong
console.log(playlistHTML);

/* Using basic for loop to Iterate over array of My playlist */
// for (let i=0; i<playlistArr.length; i++){ 
//   playlistHTML.push(
//     `<section class="card d-flex flex-row align-items-center border-0 border-dark rounded p-3 w-100 mb-1">
//   <div class="me-3">
//     <img src="./javascriptAd_Folder/svg/${playlistArr[i].albumArt}"
//           class="img-fluid"
//           style="width: 5rem;"
//           alt="Fix You artwork">
//   </div>
//   <div class="flex-grow-1">
//     <h4 class="mb-1">${playlistArr[i].title}</h4> 
//     <p class="mb-0 text-muted">${playlistArr[i].artist}</p>
//   </div>
//   <div>
//     <button class="btn btn-link p-0 text-dark text-decoration-none" aria-label="More">
//       <h2 style="transform: rotate(90deg);">...</h2>
//     </button>
//   </div>
// </section>`
//   );
// }


// Using map() function to Iterate over array of My playlist
const playListMap = playlistArr.map((playListNako) => {
  return ` <section class="card d-flex flex-row align-items-center border-0 border-dark rounded p-3 w-100 mb-1">
    <div class="me-3">
      <img src="./javascriptAd_Folder/svg/${playListNako.albumArt}"
            class="img-fluid"
            style="width: 5rem;"
            alt="Fix You artwork">
    </div>
    <div class="flex-grow-1">
      <h4 class="mb-1">${playListNako.title}</h4> 
      <p class="mb-0 text-muted">${playListNako.artist}</p>
    </div>
    <div>
      <button class="btn btn-link p-0 text-dark text-decoration-none" aria-label="More">
        <h2 style="transform: rotate(90deg);">...</h2>
      </button>
    </div>
  </section>`;
}).join(''); // <- .join() method implemented to remove commas String


/* Use forEach() method */
const bagOplayList = []; // We create new Array for forEach() method implementation.
const playListMapforEach = playlistArr.forEach((playListNako) => { // How about we use forEach() function?
  bagOplayList.push(
    ` <section class="card d-flex flex-row align-items-center border-0 border-dark rounded p-3 w-100 mb-1">
      <div class="me-3">
        <img src="./javascriptAd_Folder/svg/${playListNako.albumArt}"
              class="img-fluid"
              style="width: 5rem;"
              alt="Fix You artwork">
      </div>
      <div class="flex-grow-1">
        <h4 class="mb-1">${playListNako.title}</h4> 
        <p class="mb-0 text-muted">${playListNako.artist}</p>
      </div>
      <div>
        <button class="btn btn-link p-0 text-dark text-decoration-none" aria-label="More">
          <h2 style="transform: rotate(90deg);">...</h2>
        </button>
      </div>
    </section>`
  );
}); // <- Were not using .join() method here because we use forEach() method instead we extend .join() in bagOplayList array List





/* 
  we use .join() function because if we add the playlistHtml Array in the innerHTML, 
  it could be print like this ['', '', '' ] in our html page

  What we implemented on making my Playlist web ?
  1. Export / import the the object playlistArr in playlist.js file
  2. Create array called: playlistHTML = []
  3. In making rendering the playlistHTML to our HTML we use:
  - for loop to Iterate over Array of Objects
  - you can also use .map() function to Iterate over Arrays of Objects
*/


console.log('Array elements now: ', playlistHTML);
console.log("Array elements now ( .forEach() ): ", bagOplayList);

// containerPlaylist.innerHTML = playlistHTML;       // using basic for loop
// containerPlaylist.innerHTML = playListMap;        // using map() method
containerPlaylist.innerHTML = bagOplayList.join(''); // using forEach() method

/* In Summery: 
Use .map() method if you need to make use of the new array it returns
Use .forEach() method if you don't need to create a new array. */
console.log("\n", spaceMe, "17. The .join() Method Challenge", spaceMe, "\n");
/* Strings from arrays 
- Concatenates elements of array into a string*
- You choose how elements   are separated 
- Returns the new String 

Challenge:
1. Use the .join() method to remove
those annoying commas You will need to chain two methods
together to complete the challenge.

document.getElementById(`container).classList.toggle(`hidden`) */

console.log("\n", spaceMe, "18. The .filter() Method", spaceMe, "\nGo to Importing.js file");
/* Getting only the elements we want from an array */




/************************************************/console.log("\n", spaceMe, "25. Super Challenge: Contact Search", spaceMe, "\nGo to jsAdvance.js file"); /*===*=====================================*/
import contactsArr from './fileExported_May_you_canUse.js';

console.log(contactsArr);
/* Challenge: 
1. Wire up this search pattern app so that inputting a full or partial name brings up the matching
  contact or contacts 
*/

const myInput = document.getElementById(`pattern-search-input`);
const mysearchButton = document.getElementById(`pattern-search-submit`);
const contactDisplay = document.getElementById(`contact-display`);
const notFoundParent = $(`.divfornoFound`); // our divfornoFound Pinaka Parent
const notFound = $(`.notFound`); // Not Found Container for our p Element

mysearchButton.addEventListener('click', function () {
  console.log(`True or False:`, isMatchFound(contactsArr, myInput.value));
  findMatchingContact(contactsArr, myInput.value);

  console.log(`User Input:`, myInput.value);
  myInput.value = ``; // remove last Input
});

// function isMatchFound(dataArray, input) {
// .some() method
//   const pattern = input.trim();
//   if (pattern === "") return false;

//   const regex = new RegExp(pattern, "i"); // case-insensitive

//   return dataArray.some(
//     (contact) =>
//       regex.test(contact.name) ||
//       regex.test(contact.email) ||
//       regex.test(contact.phone)
//   );
// }

function isMatchFound(dataArray, input) {
  // .filter() method
  const pattern = input.trim();
  if (pattern === "") return false;

  const regex = new RegExp(pattern, "i"); // case-insensitive

  const matches = dataArray.filter(
    (contact) =>
      regex.test(contact.name) ||
      regex.test(contact.email) ||
      regex.test(contact.phone)
  );
  return matches.length > 0;
}


function findMatchingContact(contactsArr, pattern) {
  try {
    if (pattern.trim() !== "") {
      if (isMatchFound(contactsArr, pattern)) {
        contactDisplay.innerHTML = "";
        contactsArr
          .filter((contact) => new RegExp(pattern, "i").test(contact.name))
          .forEach((contact) => renderContact(contact));
      } else {
        alert(`Walay match sa ${pattern}`);
      }
    } else {
      // Clear any existing message first
      notFoundParent.innerHTML = "";
      const div = document.createElement("div");
      div.className = "notFound";

      const p = document.createElement("p");

      p.className = "colormyP";
      p.textContent = "No contact Found";

      div.appendChild(p);
      notFoundParent.appendChild(div);

      setTimeout(() => {
        div.remove();
      }, 1500); // cleaner Version of rendering the Not found contacts

      // let html = ``; // for reseting the html Form Input
      // const newPElement = document.createElement(`p`);
      // const newPElement = `<div class="notFound"><p class="colormyP">No contact Found</p></div>`;

      // const text = document.createTextNode(`No contact Found.`);
      // newPElement.appendChild(text); // gi write atong pharagraph Element ug text = No contact Found!.
      // newPElement.classList.add(`colormyP`);
      // newPElement.style.color = `red`;// let's make the color of text red

      // html += ` <div class="notFound">
      //   ${newPElement}
      // </div> `; // new Pharagraph add to html

      // notFoundParent.innerHTML = html; // Container dire ibutang ang ang new Elem.
      // alert("Don't leave empty, when you search.");

      // setTimeout(() => {
      //   // // box.removeChild(bubble);
      //   notFoundParent.innerHTML = ``;
      // }, 2000); // remove the element after 3 seconds.
    }
  } catch (err) {
    console.log(`Error an occur:`, err.message);
  }
}

function renderContact(conTact) {
  console.log(`Contact:`, conTact);
  const { name, email, phone } = conTact; // use Object destructuring is like conTact.name = john;

  const contactCard = document.createElement(`aside`);
  contactCard.classList.add("contact-card"); // new Container

  const nameElem = document.createElement(`p`); // for nameElement
  const emailElem = document.createElement(`p`); // for emailElement
  const phoneElem = document.createElement(`p`); // for phoneElement

  // gi write lang niya conTact Object value sa atong HTML.
  nameElem.innerText = name;
  emailElem.innerText = email;
  phoneElem.innerText = phone;

  // gibutang sa aside Element atong mga nameElem, emailElem andphoneElem.
  contactCard.appendChild(nameElem);
  contactCard.appendChild(emailElem);
  contactCard.appendChild(phoneElem);

  // final is ibutang ang container sa section Nato which is ang contactDisplay
  contactDisplay.appendChild(contactCard);
}

// function renderContact(conTact) {
//   const { name, email, phone } = conTact;
//   const contactDisplay = document.getElementById("contact-display");



//   const html = `
//     <div class="p-5 my-3 rounded-4" style="width: 59%; background-color: rgb(116, 138, 138);">
//       <h3 class="myh3">${name}</h3>
//       <h3 class="myh3">${email}</h3>
//       <h3 class="myh3">${phone}</h3>
//     </div>
//   `;
//   contactDisplay.innerHTML += html; // append instead of overwrite
// }

/* Javascript to Use
- import / export 
- regex
- filter() 
- forEach()
- Object destructuring 
*/



/************************************************/ console.log("\n", spaceMe, "8. The Rest Parameter Challenge", spaceMe, "\n"); /*===*=====================================*/
/* The Rest Parameter Challenge 
1. Add parameters.
2. Update the HTML template where you see **NAME** 
3. Return  HTML template for each label 
*/
const text = `Thank you for all your hard work throughout the year! 🎉🙏🏽`;
const sender = `Gab`;
function getLabelsHtml(textMessage, gaSend, ...staffNames) {
  return staffNames.map(staffName => `
    <div class="col-md-6">
      <div class="p-4 bg-primary text-white rounded-3 fs-3">
        <p><strong>Dear ${staffName.name},</strong></p>
        <p>${textMessage}</p>
        <p>Best wishes,<br>${gaSend}</p>
      </div>
    </div>
    `
  ).join(``);
}

document.getElementById(`contenerSurprise`).innerHTML = getLabelsHtml(
  text,
  sender,
  { name: `Sally` },
  { name: `Mike` },
  { name: `Rob` },
  { name: `Harriet` }
);
/* Javascript to Use - The Rest Param eter Challenge
  - String message
  - Sender name
  - .map() method [create new Array]
  - rendering
  - .join() method
  - ...Rest Parameter
  - dom-access #container (parent) + getLabelsHtml() -> Child
*/





/************************************************/ console.log("\n", spaceMe, "10. Super Challenge: Real State", spaceMe, "\n"); /*===*=====================================*/
/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). 
Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres 
(each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export / 
- .map() / 
- .join() /
- Object destructuring /
- .reduce() / 
- Default parameters /

The HTML and CSS have been done for you.
This is the HTML template 👇. Replace everything in UPPERCASE with property data.
*/


import propertyForSaleArr from '../Function Expressions & Parameters/properties/propertyforSaleArr.js';
import placeholderPropertyObj from "../Function Expressions & Parameters/properties/placeholdePropertyObject.js";

console.log(`placeholderPropertyObj: `, placeholderPropertyObj);
// Object.assign(.style, {
//   // backgroundSize: `contain`,
// });


function getPropertyHtml(propertyArr = [placeholderPropertyObj]) { // the placeholderPropertyObj is set to Default Paramter and push inside an Array of Object.
  // function getPropertyHtml(placeholderPropertyObj, propertyForSaleArr) {
  let myPropertyLoc, myPriceGBP, myRoomsM2, myComment, myImage;

  const propPerper = [propertyArr]; // the placeholderPropertyObj is set to Default Paramter and push inside an Array of Object.// the placeholderPropertyObj is set to Default Paramter and push inside an Array of Object.
  return propertyArr.map((property) => {
    const { propertyLocation, priceGBP, roomsM2, comment, image } = property;
    // alert(`priceGBP: ${roomsM2}`);

    const totalRM2 = roomsM2.reduce(
      (total, currentElement) => total + currentElement
    );
    // alert(`Total Meter square: ${totalRM2}`);
    return `<section class="p-0 realStateCont">
        <img class="realStateImage img-fluid" src="./Function Expressions & Parameters/Images/${image}" alt="imagRender">
        <div class="card-right">
            <h1><b>${propertyLocation}</b></h1>
            <h3><b>£${priceGBP}</b></h3>
            <p>${comment}</p>
            <h2><b>${totalRM2} m²</b></h2>
        </div>
      </section>  `;
  });

  if (!propertyForSaleArr) {
    const { propertyLocation, priceGBP, roomsM2, comment, image } =
      placeholderPropertyObj; // Object Destructuring

    console.log(`myPropertyLoc:`, propertyLocation); // Expected Output in Line 606

    // alert(`This is ${propertyForSaleArr} \nDefault Parameter (used)`);
    console.log(`propertyLocation:`, roomsM2);

    const placeHObj = roomsM2.reduce((total, currentElement) => {
      console.log(
        `Total: ${total}  ++++++++++  CurrentElemen: ${currentElement}`
      );
      return total + currentElement;
    });
    console.log(`placeHObj: `, placeHObj); // placeholderPropertyObj Expected Ouput in Total roomsM2: 50

    myPropertyLoc = propertyLocation;
    myPriceGBP = priceGBP;
    myRoomsM2 = placeHObj;
    myComment = comment;
    myImage = image;
  } else {
    return propertyArr
      .map((theProperty) => {
        // using Default Parameter -> propertyArr = [placeholderPropertyObj]
        // return propertyForSaleArr.map((theProperty) => {

        const totProp = theProperty.roomsM2.reduce(function (
          total,
          currentElement
        ) {
          console.log(`Total: ${total} CurrentElement: ${currentElement}`);
          return total + currentElement;
        });

        return `<section class="p-0 realStateCont">
        <img class="realStateImage img-fluid" src="./Function Expressions & Parameters/Images/${theProperty.image}" alt="imagRender">
        <div class="card-right">
            <h1><b>${theProperty.propertyLocation}</b></h1>
            <h3><b>£${theProperty.priceGBP}</b></h3>
            <p>${theProperty.comment}</p>
            <h2><b>${totProp} m²</b></h2>
        </div>
      </section> 
      `;
      })
      .join("");
  }

  return `<section class="p-0 realStateCont">
    <img class="realStateImage img-fluid" src="./Function Expressions & Parameters/Images/${myImage}" alt="imagRender">
    <div class="card-right">
        <h1><b>${myPropertyLoc}</b></h1>
        <h3><b>£${myPriceGBP}</b></h3>
        <p>${myComment}</p>
        <h2><b>${myRoomsM2} m²</b></h2>
    </div>
  </section> 
  `;
}

document.getElementById("containerRealStaet").innerHTML = getPropertyHtml(
  // placeholderPropertyObj
  // ,
  propertyForSaleArr // Try to Empty parameter
);




/************************************************/ console.log("\n", spaceMe, "6. fetch().then()", spaceMe, "\nGo to jsAdvance.js file"); /*===*=====================================*/

fetch(`https://dog.ceo/api/breeds/image/random`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  // .then((data) => console.log(data));
  .then((data) => {
    [data].forEach((element) => {
      console.log(`Dog element:`, element.message);

      const imageElemApi = document.createElement("img");
      imageElemApi.src = element.message;
      imageElemApi.alt = "ImageApiAlt";
      document.getElementById("imageContainer").appendChild(imageElemApi);
    });
  }) // We use curly braces with more complex algorithm or logic
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// fetch(`https://api.thecatapi.com/v1/images/MTg3NzMwMA`)
fetch(`https://api.thecatapi.com/v1/images/search`)

  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  // .then((data) => console.log(data));
  .then((data) => {
    console.log("Status: 200 OK");
    console.log(`Cat api:`, data);
    console.log(typeof data);

    // For Each
    // [data].forEach((dataCat) => {
    //   console.log(`Get element (using forEach):`, dataCat.url);
    // });

    // For of
    for (const catApi of data) {
      console.log(`Get element (using for of):`, catApi.url);
      console.log(`Height of img:`, catApi.height);

      const imageCatElemApi = document.createElement("img");
      imageCatElemApi.src = catApi.url;

      if (catApi.height === 960) {
        imageCatElemApi.width = 300;
        imageCatElemApi.height = 375;

        console.log(`Updated of img:`, catApi.height);
      }

      imageCatElemApi.alt = "ImageApiAltEring";
      document.getElementById("catImageContainer1").appendChild(imageCatElemApi);
    }
  }) // We use curly braces with more complex algorithm or logic
.catch((error) => {
  console.error("Fetch error:", error);
});




/************************************************/ console.log("\n", spaceMe, "7. fetch().then() Challenge", spaceMe, "Go back to Starting.js file"); /*===*=====================================*/
/*  
Challenge:  
1. Make a fetch request to the "Bored" API:  
   Base URL: https://apis.scrimba.com/bored/api  
   Endpoint: /activity  

2. Log an object containing an activity suggestion to the console:  
   @ hint.md for help!  
*/


/************************************************/ console.log("\n", spaceMe, "8. Fetching with async/await", spaceMe, "\n"); /*===*=====================================*/
/*
const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
const data = await response.json();

data.forEach(dataCat => {
  console.log(`\nData Image:`, dataCat);

  const catElementimg = document.createElement(`img`);
  catElementimg.src = dataCat.url;
  catElementimg.alt = `Cat element img api`;
  document.getElementById(`catImageContainer2`).appendChild(catElementimg);
});
*/
async function getDogImage() {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
  const data = await response.json();

  data.forEach((dataCat) => {
    console.log(`\nData Image:`, dataCat);

    const catElementimg = document.createElement(`img`);
    catElementimg.src = dataCat.url;
    catElementimg.alt = `Cat element img api`;
    document.getElementById(`catImageContainer2`).appendChild(catElementimg);
  });
}

getDogImage();




/************************************************/ console.log("\n", spaceMe, "10. Handling Rejected Promises", spaceMe, ""); /*===*=====================================*/
const baseUrl = "https://dog.ceo/api/breeds/image/random";
// try {
//   fetch(baseUrl)
//     .then((res) => res.json())
//     .then((data) => console.log(`Full response:`, data.message));
// } catch (err) {
//   console.log(`Error an occur:`, err.message);
//   // throw new Error(`This is a network error!`);
// } finally {
//   console.log(`The operation completed.`);
// }





/************************************************/ console.log("\n", spaceMe, "11. response.ok", spaceMe, ""); /*===*=====================================*/
/*

*-------------------------------------------------------------------------------------------------------*
|     Status Code Basics                                                                                |
|   🟢 200 - 299 successful response: TRUE                                                             |
|   🔴 404 = not found: FALSE                                                                          |
|   🔴 500 = server errors: FALSE                                                                      |
*-------------------------------------------------------------------------------------------------------*
*/

try {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  console.log(`Response ok:`, response.ok);
  if (!response.ok) {
    throw new Error(`This is a network error!`);
  }
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log(`Error an occur:`, error.message);
} finally {
  console.log(`The operation completed.`);
}

/*
In Summary
          try/catch                               response.ok
    Catches exceptions and                    Checks the success of the 
  errors that occur during                      HTTP response status,
the execution of the code,                    which might not throw an 
  including network errors                    error but still indicates a
    and other unexpected                            failure
        issues
*/




/************************************************/ console.log("\n", spaceMe, "12. Taking APIs to the Next Level", spaceMe, ""); /*===*=====================================*/
/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
Remember to handle all errors!
 */




/************************************************/ console.log("\n", spaceMe, "15. Working with images asynchronously", spaceMe, ""); /*===*=====================================*/

/*const image = document.createElement(`img`);
image.src = "http://gwapoko.com";

const image2 = new Image();
image2.src = "http://gwapoko.com";

console.log(image);
console.log(image2);

Challenge:
1. Create two event listeners. One should listen
  out for the image loading and log "Image has loaded".
  The other should listen for an error and log
  "Image has NOT loaded" 
 */

const image = new Image();

/* Sa google nako nakuha rani. */
const string1 = "https://cdn2.thecatapi.com/images/MTg3NzMwMA.jpg";
const string2 = "http://...";

// If Math.random() is greater than 0.5, choose string1, otherwise choose string2
const chosenString = Math.random() > 0.5 ? string1 : string2;

console.log(chosenString);

image.src = chosenString;

console.log(image);

image.addEventListener('load', () => console.log("Image has loaded✔✔✔✔✔"));
image.addEventListener('error', () => console.log("Image has NOT loaded💥💥💥💥💥"));





/************************************************/ console.log("\n", spaceMe, "16. Promise Challenge", spaceMe, ""); /*===*=====================================*/
function preLoadImg(url) {
  return new Promise((resolve, reject) => {

    const imahe = new Image();
    imahe.src = url;
    imahe.alt = 'akong imahe';

    imahe.addEventListener(`load`, () => resolve(imahe));
    imahe.addEventListener(`error`, () => {
      reject("Your'e image is not load properly!")
      throw new Error('Dili mo load gi-atay!');
    });
  });

  /* Challenge:
  1. Return a new promise. The promise should:
    - create a new image and assign the incoming url to
    its src attribute. (Use the Image constructor for this!)
    
    - listen out for a load event. If a Load event is detected,
    the promise should resolve, providing the image element.

    - listen out for an "error" event. If an error event is detected,
    the promise should reject giving the message "img has NOT loaded".
  */
}

const getPreLoadimg = async () => {
  try {
    const results = await preLoadImg('https://cdn2.thecatapi.com/images/MTg3NzMwMA.jpg');
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

getPreLoadimg();





/************************************************/ console.log("\n", spaceMe, "17. Callback Hell", spaceMe, ""); /*===*=====================================*/
/* Callback hell is a situation where 
mulitple async operations are chained together using nested callbacks, 
which makes the code difficult to read and maintain.
*/

// upload a file
// process a file
// notify a user

/* Challenge: 
1. Try to invoke these functions so they run in sequence.
  the callback function passed to the final function (notifyUser)
  can just be an anonymous function that logs 'All steps completed!'

  You will come up against a gotcha here!
  hint.md is here to help!

  Expected Output:

  Step 1: Uploading file...
  Step 2: Processing file..
  Step 3: Notifying user...
  All steps completed!
*/

function uploadFile(callback) {
  console.log(`Step 1: Uploading file...`);

  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}

function processingFile(callback) {
  console.log(`Step 2 : Processing file..`);

  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}

function notifyUser(callback) {
  console.log(`Step 3: Notifying user...`);

  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}

// uploadFile(processingFile(notifyUser)); // Error

// // The pyramid of Doom
uploadFile(() => {
  processingFile(() => {
    notifyUser(() =>
      console.log('All steps completed!'));
  })
});





/************************************************/ console.log("\n", spaceMe, "18. Using Promises to escape Callback Hell", spaceMe, "\nGo back to Starting.js file"); /*===*=====================================*/
/*
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

  try {
    await uploadFile();
    await processFile();
    await notifyUser();
    console.log('All steps completed!');
  } catch (err) {
    console.log(err);
  }


*/





/************************************************/ console.log("\n", spaceMe, "19. Super challenge: Async Image Load", spaceMe, ""); /*===*=====================================*/
function getImagePromise(url) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const img = new Image();
      img.src = url;
      img.alt = 'scenic image';

      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)));
    }, 500);
  });
}

const images = [
  'https://scrimba.com/links/advancedjs-resources-images-scenic1',
  'https://scrimba.com/links/advancedjs-resources-images-scenic2',
  'https://scrimba.com/links/advancedjs-resources-images-scenic3'
];

async function preLoadImages(imageUrlsArr) {
  const imgContainer = document.getElementById('img-container');
  const uploadContainer = document.getElementById('upload-container');
  const grandFather = $('#grandFather-Async-Image-Load');

  const promises = imageUrlsArr.map(url => getImagePromise(url));
  console.log(promises);
  
  try {
    const results = await Promise.all(promises);
    console.log(`All images loaded successfully!`);
    
    // uploadContainer.style.display = `none`;
    // uploadContainer.classList.add('d-NoneMe');
    results.forEach((img) => imgContainer.appendChild(img)  );
    
    imgContainer.classList.add('img-containerImple');
    uploadContainer.classList.add('d-none');                // Bootstrap
    imgContainer.classList.add('img-containerImple img');
    
    grandFather.classList.add('w-50'); 
    
  } catch (err) {
    console.log(err);
  }
}

/* 
Challenge:
1. Create an array of promises using getImagePromise.         /
2. Save the results of calling all of those promises 
  in  one go to a const 'results'.                            /
3. If the promises resolve:                                   /
  - log "All images loaded successfully".
  - hide 'uploadContainer' 
  - Iterate over the results and render them to imgContainer
4. if the promises reject:                                    /
  - catch and log the error.
*/

document.getElementById('submit-imgs').addEventListener('click', ()=> preLoadImages(images));

/*
What we studied:
- What is an API
- Clients and Servers
- Requests and Responses
- JSON data
- The URLs we use to access APIs
- Fetching Data
- Handling errors
- Promises
*/




/************************************************/ console.log("\n", spaceMe, '12. Binding"this" Challenge', spaceMe, ""); /*===*=====================================*/
import producto from '../Working with Objects/WorkingObject.js';

const clickBtn = document.getElementById(`btn`);

// same producto use
/*
Challenge 1:
What is the 'this' value of 'product.getProductInfo' as we 
are using it now in the eventListeners?

Write your answer here:

Challenge 2: 
    Debug the code so it works as intended
*/
// console.log(producto);
// clickBtn.addEventListener('click', ()=> console.log('You click binding "this" button.'));

// const productfExpress = producto.getProductInfo.bind(producto);
clickBtn.addEventListener('click', producto.getProductInfo.bind(producto));

const event = {
  name: '',
  date: '',
  location: '',
  getDetails: function() {}
}

console.log(event);
console.log();