/*
Luhn algorithm is a simple checksum formula used to 
validate a variety of identification numbers, such as credit card numbers, 
IMEI numbers, National Provider Identifier numbers in the US, Canadian Social Insurance Numbers, 
Israeli ID Numbers, South African ID Numbers, Greek Social Security Numbers (ΑΜΚΑ), and Greek VAT numbers (ΑΦΜ).
The algorithm is in the public domain and is in wide use today.

How to validate a Credit Card Number? https://www.freeformatter.com/credit-card-number-generator-validator.html
Most credit card number can be validated using the Luhn algorithm, which is more or a less a glorified Modulo 10 formula!

The Luhn Formula:
-- Drop the last digit from the number. The last digit is what we want to check against
-- Reverse the numbers
-- Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
-- Add all the numbers together
-- The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)
*/

const luhn = (number) => {
    let sum = 0; // sum of digits
    let shouldDouble = false; // should double the digit
    while (number) { // while number is not 0
        let digit = number % 10; // get the last digit
        number = Math.floor(number / 10); // remove the last digit
        if (shouldDouble) { // 
        digit *= 2; // double the digit
        if (digit > 9) { // if the digit is greater than 9
            digit -= 9; // subtract 9 from the digit
        }
        }
        sum += digit; // add the digit to the sum
        shouldDouble = !shouldDouble; // toggle the shouldDouble flag
    }
    return sum % 10 === 0; // return true if the sum is divisible by 10
    };

// Test

console.log(luhn(79927398713)); // why true? because the last digit is 3
console.log(luhn(79927398710)); // why false? because the last digit is not 3, but 0