function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    let array = [0,0];
    for (let i = 0; i < input.length; i++) {
        (input[i] > 0) ? array[0] += 1 : (input[i] < 0) ? array[1] += input[i] : ""
    }
    return array
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))