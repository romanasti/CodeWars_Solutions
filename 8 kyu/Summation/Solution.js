var summation = function (num) {
    let res = 0;
    for (let i = 0; i < num; i++) {
        res += i+1
    }
    return res
}

console.log(summation(8))

