//Ask the user to fill in a price
let price = prompt("Enter the price: For example $50,00");

//Convert the input from string to number
let price2 = parseFloat(price.slice(1));

// Give 10% dicount
let discountedPrice = price2 * 0.9;

// Print out the new price
console.log(`Discounted price: $${discountedPrice}`);