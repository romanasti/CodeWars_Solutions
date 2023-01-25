function persistence(num) {
    let res = 0;
    while (Array.from(num.toString(), Number).length !== 1) {
        num = Array.from(num.toString(), Number).reduce((a, b) => a * b)
        res++
    }
    return res
}

console.log(persistence(999))



