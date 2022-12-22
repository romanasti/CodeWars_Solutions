function highAndLow(numbers) {
    let array = numbers.split(" ").map(i => Number(i))
    let highest = array[0];
    let lowest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i]
        }
        if (array[i] > highest) {
            highest = array[i]
        }
    }
    return highest + " " + lowest
}

console.log(highAndLow("1 2 3 4 5"))