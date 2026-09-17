const fs = require('fs');

// Create file and write content
fs.writeFileSync(
    'file_info.txt',
    'This is a sample file created using Node.js fs module.',
);

// Function to read file and create log
function getFileInfo() {
    // Read file content
    const content = fs.readFileSync('file_info.txt', 'utf8');

    console.log('File Content:');
    console.log(content);

    // Get file information
    const stats = fs.statSync('file_info.txt');

    // Create log content
    const log = `
File Name: file_info.txt
File Size: ${stats.size} bytes
File Creation Date and Time: ${stats.birthtime}
File Modification Date and Time: ${stats.mtime}
`;

    // Write information to log file
    fs.writeFileSync('file_info.log', log);

    console.log('\nFile information saved in file_info.log');
}

// Call the function
getFileInfo();
