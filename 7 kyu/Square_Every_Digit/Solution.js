function squareDigits(num) {
    let array = ("" + num).split("").map(Number)
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        temp.push(array[i] * array[i])
    }
    return Number(temp.join(""))
}

console.log(squareDigits(2112))