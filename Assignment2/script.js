// script.js

// 1. Display even numbers from 1 to 100
const evenNumbersDiv = document.getElementById('even-numbers');

let evenNumbers = '';
for (let i = 2; i <= 100; i += 2) {
    evenNumbers += i + ' ';
}

evenNumbersDiv.textContent = evenNumbers;

// 2. Function to perform arithmetic operations using switch
function calculate(n1, n2, operation) {
    switch (operation) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            return n1 / n2;
        default:
            return 'Invalid operation';
    }
}

function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const result = calculate(num1, num2, operation);
    document.getElementById('calc-result').textContent = `Result: ${result}`;
}

// 3. Function to calculate tax using switch
function findTax(salary) {
    switch (true) {
        case (salary > 0 && salary <= 500000):
            return salary * 0;
        case (salary > 500000 && salary <= 1000000):
            return salary * 0.10;
        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.20;
        case (salary > 1500000):
            return salary * 0.30;
        default:
            return 'Invalid salary';
    }
}

function calculateTax() {
    const salary = parseFloat(document.getElementById('salary').value);
    const tax = findTax(salary);
    document.getElementById('tax-result').textContent = `Tax: ${tax}`;
}

// 4. Function to find the sum of the products of corresponding digits
function sumOfProducts(n1, n2) {
    const str1 = n1.toString().split('').reverse();
    const str2 = n2.toString().split('').reverse();
    let sum = 0;
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        const digit1 = parseInt(str1[i] || 0, 10);
        const digit2 = parseInt(str2[i] || 0, 10);
        sum += digit1 * digit2;
    }
    return sum;
}

function findSumOfProducts() {
    const n1 = parseInt(document.getElementById('n1').value, 10);
    const n2 = parseInt(document.getElementById('n2').value, 10);
    const result = sumOfProducts(n1, n2);
    document.getElementById('product-sum-result').textContent = `Sum of Products: ${result}`;
}
