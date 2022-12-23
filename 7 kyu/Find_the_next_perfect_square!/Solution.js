function findNextSquare(sq) {
    let temp;
    let next;
    if (Math.sqrt(sq) % 1 === 0) {
        temp = Math.sqrt(sq)
        next = temp + 1
    } else {
        return -1
    }
    return next * next;
}

console.log(findNextSquare(121))

