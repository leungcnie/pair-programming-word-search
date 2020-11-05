const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))

    // new const for vertical perhaps?
    const verticalJoin = letters[0].map((x, colIndex) => letters.map(row => row[colIndex]).join(''));
    const verticalJoinReverse = letters[0].map((x, colIndex) => letters.map(row => row[colIndex]).reverse().join(''));
    const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''));
    console.log(verticalJoinReverse);

    if (doesInclude(verticalJoin, word)) {
        return true;
    } else if(doesInclude(horizontalJoinReverse, word)) {
        return true;
    } else if(doesInclude(horizontalJoin, word)) {
        return true;
    } else if(doesInclude(verticalJoinReverse, word)) {
        return true;
    }
    return false;
}

const doesInclude = (letters, word) => {
    for(const l of letters) {
        if(l.includes(word)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch
