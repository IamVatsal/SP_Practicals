const fs = require('fs');
const TextProcessing = require('./TextProcessing');

const text = fs.readFileSync('file1.txt', 'utf8');

console.log('Total Words:', TextProcessing.countWords(text));
console.log('Total Lines:', TextProcessing.countLines(text));
console.log('Total Characters:', TextProcessing.countCharacters(text));
