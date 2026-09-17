const fs = require('fs');

// --------------------
// Synchronous Operation
// --------------------

console.log('Synchronous File Read:');

const syncData = fs.readFileSync('file1.txt', 'utf8');

console.log(syncData);
console.log('Synchronous operation completed.');

// --------------------
// Asynchronous Operation
// --------------------

console.log('\nAsynchronous File Read:');

fs.readFile('file1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error:', err);
        return;
    }

    console.log(data);
    console.log('Asynchronous operation completed.');
});

console.log('This line executes before the asynchronous file read completes.');
