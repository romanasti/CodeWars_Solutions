function squareSum(numbers) {
    let temp = 0;
    for (let i = 0; i < numbers.length; i++) {
        temp += numbers[i] ** 2
    }
    return temp
}

console.log(squareSum([]))