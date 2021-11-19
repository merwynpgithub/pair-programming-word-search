const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        //check if the strings are empty
        if (!l.length) return false;
        if (l.includes(word)) return true
    }
    const verticalJoin = [];
    for (let i = 0; i < letters[i].length; i++) {
        let verticalWordString = "";
        for (let j = 0; j < letters.length; j++) {
            verticalWordString += letters[j][i];
        }
        verticalJoin.push(verticalWordString);
    }
    for (l of verticalJoin) {
        //check if the strings are empty
        if (!l.length) return false;
        if (l.includes(word)) return true
    }
    const reverseJoin = [];
    horizontalJoin.forEach(element => {
        let word = element.split('').reverse().join('');
        reverseJoin.push(word);
    });
    for (l of reverseJoin) {
        //check if the strings are empty
        if (!l.length) return false;
        if (l.includes(word)) return true;
    }
    const reverseVerticalJoin = [];
    verticalJoin.forEach(element => {
        let word = element.split('').reverse().join('');
        reverseVerticalJoin.push(word);
    });
    for (l of reverseVerticalJoin) {
        //check if the strings are empty
        if (!l.length) return false;
        if (l.includes(word)) return true;
    }

    return false;
}
//please refer to the readme image for psuedocode
const diagwordSearch = (letters, word) => {
    const diagonalJoin = [];
    let diagWordStrLen = letters.length + letters[0].length;
    let diaglen = letters[0].length;
    let counter = 0;
    for (let i = 0; i < diagWordStrLen; i++) {
        let word = "";
        for (let j = 0; j < diaglen; j++) {
            word += letters[j][j + counter];
            // counter++;
        }
        diagonalJoin.push(word);
        console.log(diagonalJoin);
        diaglen -= 1;
        counter++;
    }
    // console.log(diagonalJoin);
    return false;
};


module.exports = { wordSearch, diagwordSearch }

//collab with github user- @merwynp and @abhiram-satha