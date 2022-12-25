function reduce (x) {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res *= x[i]
    }
    return res
}

console.log(reduce([1, 2, 3, 4]))