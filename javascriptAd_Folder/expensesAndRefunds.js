const expensesAndRefunds = [
  { description: "Groceries", amount: 50, year: 2023 },
  { description: "Electronics", amount: -30, year: 2023 }, // in the condition we skip this because -30 < 0
  { description: "Dinner", amount: 40, year: 2023 },
  { description: "Clothing", amount: 60, year: 2023 },
  { description: "Entertainment", amount: 25, year: 2023 }, // the Iteration stop here because in next Array object the year reached the CutoffYear = 2024
  { description: "Rent", amount: -500, year: 2024 },
  { description: "Utilities", amount: 100, year: 2024 },
  { description: "Books", amount: 20, year: 2024 },
  { description: "Fitness", amount: 30, year: 2024 },
  { description: "Gifts", amount: 15, year: 2024 },
];

export {expensesAndRefunds};
