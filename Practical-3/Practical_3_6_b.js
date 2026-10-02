const os = require('os');

function displayMemoryInfo() {
    const freeMem = os.freemem();
    const totalMem = os.totalmem();
    console.log('Total Memory:', (totalMem / 1024 ** 3).toFixed(2), 'GB');
    console.log('Free Memory:', (freeMem / 1024 ** 3).toFixed(2), 'GB');
}

// Example usage
displayMemoryInfo();
