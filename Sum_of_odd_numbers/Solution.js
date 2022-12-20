function rowSumOddNumbers(n) {
    let firstNum = (n * n) - (n - 1);
    let res = 0;
    for (let i = 0; i < n;) {
        if (firstNum % 2 !== 0) {
            res += firstNum;
            i++;
        }
        firstNum++
    }
    return res
}

console.log(rowSumOddNumbers(2))
