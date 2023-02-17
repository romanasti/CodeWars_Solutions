function arithmetic(a, b, operator){
let obj = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b
}
    return obj[operator]
}

console.log(arithmetic(5, 2, "subtract"))