/* export   (you can export individually) */ 
const interplanetaryDestinationsArr = [
  {
    destination: "Nova Prime",
    distanceKM: 500000000,
    travelTimeDays: 365,
    priceUSD: 1000000,
    description:
      "Experience the exotic beauty and thriving ecosystem of Nova Prime.",
  },
  {
    destination: "Lunar Outpost Alpha",
    distanceKM: 384400,
    travelTimeDays: 3,
    priceUSD: 50000,
    description:
      "Visit the first human outpost on the Moon and witness breathtaking lunar landscapes.",
  },
  {
    destination: "Titan Oasis",
    distanceKM: 1200000000,
    travelTimeDays: 730,
    priceUSD: 5000000,
    description:
      "Explore the methane lakes and the potential for extraterrestial life on Titan.",
  },
];

const shortSpaceTripsArr = [
  {
    destination: "Moon pass",
    distanceKM: 500000000,
    travelTimeDays: 3,
    priceUSD: 1000000,
    description: "Take a quick trip to the Moon and witness Earthrise from space.",
  },
  {
    destination: "Orbit the Earth",
    distanceKM: 84400,
    travelTimeDays: 1,
    priceUSD: 50000,
    description: "Experience weightlessness and breathtaking views of Earth by orbiting our home planet.",
  },
  {
    destination: "Asteroid flypast",
    distanceKM: 60000,
    travelTimeDays: 2,
    priceUSD: 20000,
    description: "Get up close to a passing asteroid and witness the wonders of the asteroid belt.",
  },
];

export { interplanetaryDestinationsArr, shortSpaceTripsArr };

// console.log(`Type:`,typeof interplanetaryDestinationsArr);