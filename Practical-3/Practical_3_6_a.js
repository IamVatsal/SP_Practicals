const path = require('path');

function checkPathType(filePath) {
    if (path.isAbsolute(filePath)) {
        console.log(`"${filePath}" is an absolute path.`);
    } else {
        console.log(`"${filePath}" is a relative path.`);
    }
}

// Example
checkPathType('/usr/local/bin');
checkPathType('data/info.txt');
checkPathType('C:\\Users\\Admin');
