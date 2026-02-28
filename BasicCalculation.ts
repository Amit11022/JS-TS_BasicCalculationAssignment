//  Basic Calculation Assignment


// 1. Create a function that takes 25 and 35 and returns their total sum
function addNumbers(a: number, b: number): number {      // Function with two parameters
    return a + b;                                        // Return sum
}
console.log("1. Sum of 25 and 35:", addNumbers(25, 35)); // Function call



// 2️. Define three variables and find their sum
let num1: number = 10;                                   // First number
let num2: number = 20;                                   // Second number
let num3: number = 30;                                   // Third number

let totalSum: number = num1 + num2 + num3;               // Add all three numbers
console.log("2. Sum of three numbers:", totalSum);       // Print result



// 3. Add 150 and 250 and store result in grandTotal
let numA3: number = 150;                                 // First number
let numB3: number = 250;                                 // Second number
let grandTotal: number = numA3 + numB3;                  // Add the two numbers and store in grandTotal
console.log("3. Grand Total:", grandTotal);              // Print grandTotal



// 4️. Increase score from 80 to 90 using + operator
let score: number = 80;                                  // Initial score
score = score + 10;                                      // Increase by 10
console.log("4. Updated Score:", score);                 // Print updated score



// 5. Combine 99 and 1 and print result
let numA4: number = 99;                                  // First number
let numB4: number = 1;                                   // Second number
let combinedResult: number = numA4 + numB4;              // Add the two numbers
console.log("5. Combined Result:", combinedResult);      // Print result



// 6. Function to subtract 45 from 100 and return value
let numA5: number = 100;                                 // number to subtract from
let numB5: number = 45;                                  // number to subtract

function subtractValue(): number {                       // Function with no parameters
    return numA5 - numB5;                                // Subtract numB5 from numA5 and return the result
}

let subtractionResult: number = subtractValue();         // Call the function and store the result
console.log("6. Subtraction Result:", subtractionResult);// Print the result



// 7. Subtract expense of 120 from walletBalance of 500
let walletBalance: number = 500;                         // Initial wallet balance
let expense: number = 120;                               // Expense to subtract
walletBalance = walletBalance - expense;                 // Subtract expense using variable
console.log("7. Remaining Wallet Balance:", walletBalance);// Print balance



// 8. Find the difference between 2000 and 850 using variables
let numA6: number = 2000;                                // First number
let numB6: number = 850;                                 // Second number
let difference: number = numA6 - numB6;                  // Subtract numB6 from numA6
console.log("8. Difference:", difference);               // Print result



// 9. Decrease stock by 5 using -= operator
let stock: number = 50;                                  // Initial stock
let decreaseAmount: number = 5;                          // Amount to decrease
stock -= decreaseAmount;                                 // Decrease stock using variable
console.log("9. Updated Stock:", stock);                 // Print updated stock



// 10. Calculate how much more 150 is than 75
let numA7: number = 150;                                 // First number
let numB7: number = 75;                                  // Second number
let comparison: number = numA7 - numB7;                  // Subtract numB7 from numA7
console.log("10. Difference:", comparison);              // Print result



// 11. Function that multiplies a number by 10
function multiplyByTen(num: number): number {           // Function with one parameter
    return num * 10;                                     // Multiply by 10
}
console.log("11. Multiply by 10:", multiplyByTen(5));   // Function call



// 12. Calculate the total price of 5 items if each costs $15
let itemPrice: number = 15;                              // Price of one item
let quantity: number = 5;                                // Number of items
let totalPrice: number = itemPrice * quantity;           // Total price
console.log("12. Total Price:", totalPrice);             // Print result



// 13. Find the product of 12 and 12
let numA8: number = 12;                                  // First number
let numB8: number = 12;                                  // Second number
let product: number = numA8 * numB8;                     // Multiply numA8 and numB8
console.log("13. Product:", product);                    // Print result



// 14. Calculate the area of a rectangle (length = 20, width = 10)
let rectLength: number = 20;                             // Rectangle length
let rectWidth: number = 10;                              // Rectangle width
let area: number = rectLength * rectWidth;               // Area formula: length × width
console.log("14. Rectangle Area:", area);                // Print area



// 15. Triple the value of 30 using a variable
let numberToTriple: number = 30;                         // Original number
let tripled: number = numberToTriple * 3;                // Triple it
console.log("15. Tripled Value:", tripled);              // Print result



// 16. Function to divide 100 by 4 and return result
let dividend: number = 100;                              // Number to be divided
let divisor: number = 4;                                 // Number to divide by

function divideHundred(): number {                      // Function with no parameters
    return dividend / divisor;                           // Divide dividend by divisor and return the result
}

let divisionResult: number = divideHundred();           // Call function and store the result
console.log("16. Division Result:", divisionResult);     // Print result



// 17. Split 50 chocolates equally among 5 friends
let chocolates: number = 50;                             // Total chocolates
let friends: number = 5;                                 // Number of friends
let chocolatesPerFriend: number = chocolates / friends;  // Divide chocolates equally
console.log("17. Chocolates per Friend:", chocolatesPerFriend);// Print result



// 18. Find half of 1500
let numberToHalf: number = 1500;                         // Number to divide
let divider: number = 2;                                 // Divisor for half
let halfValue: number = numberToHalf / divider;          // Divide the number by divisor
console.log("18. Half of 1500:", halfValue);             // Print result



// 19. Find quotient when 81 is divided by 9
let dividend1: number = 81;                              // Number to be divided
let divisor1: number = 9;                                // Number to divide by
let quotient: number = dividend1 / divisor1;             // Divide dividend by divisor1
console.log("19. Quotient:", quotient);                  // Print result



// 20. Use Modulus (%) operator to find remainder when 10 divided by 3
let dividend2: number = 10;                              // Number to be divided
let divisor2: number = 3;                                // Number to divide by
let remainder: number = dividend2 % divisor2;            // Find remainder using modulus operator
console.log("20. Remainder:", remainder);                // Print result