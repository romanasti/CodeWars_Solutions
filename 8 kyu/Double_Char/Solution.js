function doubleChar(str) {
let arr = [];
    for (const arrKey in str) {
        arr.push(str[arrKey] + str[arrKey])
    }
    return arr.join("")
}

console.log(doubleChar("abcd"))