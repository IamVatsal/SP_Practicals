// Get command-line arguments (excluding 'node' and the script path)
const args = process.argv.slice(2);

// Check if exactly 5 arguments are provided
if (args.length !== 5) {
    console.error('Error: Please provide exactly 5 numbers.');
    console.log('Usage: node compute.js <num1> <num2> <num3> <num4> <num5>');
    process.exit(1);
}

// Convert inputs to numbers
const numbers = args.map(Number);

// Validate that all inputs are valid numbers
if (numbers.some(isNaN)) {
    console.error('Error: All inputs must be valid numbers.');
    process.exit(1);
}

// Perform calculations
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / numbers.length;
const smallest = Math.min(...numbers);
const largest = Math.max(...numbers);

// Display the results
console.log('--- Results ---');
console.log(`Numbers:  ${numbers.join(', ')}`);
console.log(`Sum:      ${sum}`);
console.log(`Average:  ${average}`);
console.log(`Smallest: ${smallest}`);
console.log(`Largest:  ${largest}`);
