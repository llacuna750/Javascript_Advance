const spaceMe = "-".repeat(30);
/* App requirements:

  - The app should display the name, symbol, and price of the stock, with a timestamp as per the screenshot.

  - The triangle compares the current stock price to its previous price. If the price has increased, it should be a green triangle pointing up, if the price has decreased it should be a red triangle pointing down, and if there has been no change it should be a grey triangle pointing to the right.

  - The price should update every 1.5 seconds.

    Challenge:

    1. Find a way to get fresh stock data every 1.5 seconds.

    2. Call the renderStockTicker function with the fresh data.

    3. Add logic to renderStockTicker to display the correct information.

    🔍 You will need to write code here in index.js and in fakeStockAPI.js.


Stock Ticker App require:

name: Qtech AI
Symbol: QTA
display stock price 
updates every 1.5s
PriceIcon 

triange: 
compare the current stock price to its prev price
increase: T-pointUp (green)
decrease: T-pointDown (red)
noChange: T-pointRight (grey)
*/

// console.log("\n", spaceMe, "12. Super Challeng: Stock Ticker", spaceMe, "\n");

function getStockData() {
  const myphdate = new Date();
  const localTime = myphdate.toDateString(); 
  const localTime2 = myphdate.toLocaleTimeString();

  return {
    name: "QtechAI",
    sym: "QTA",
    price: (Math.random() * 3).toFixed(2) /* return a random between 0 to 3 to two decimal places */,
    time: localTime+", "+localTime2 /* return a timestamp in this format: hh/mm/ss */,
    //   time: new Date().getTime()  /* return a timestamp in this format: hh/mm/ss */
  };
}

export default getStockData;