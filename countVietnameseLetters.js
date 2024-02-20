function countVietnameseLetters(inputString) {
    const vietnameseLettersRegex = /aw|aa|dd|ee|oo|ow|uw|w/g;

    const matches = inputString.match(vietnameseLettersRegex);

    const count = matches ? matches.length : 0;

    return count;
}

const input = "hfdawhwhcoomdduw";// Users can import
const output = countVietnameseLetters(input);
console.log(`Output: ${output}`); 
