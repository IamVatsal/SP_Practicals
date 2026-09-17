function countWords(text) {
    return text.trim().split(/\s+/).length;
}

function countLines(text) {
    return text.split(/\r?\n/).length;
}

function countCharacters(text) {
    return text.length;
}

module.exports = {
    countWords,
    countLines,
    countCharacters
};