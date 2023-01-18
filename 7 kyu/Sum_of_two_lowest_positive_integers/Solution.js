function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a,b) { return a-b })
    let last = numbers[0]
    let secondLast = numbers[1]
    return last + secondLast
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))