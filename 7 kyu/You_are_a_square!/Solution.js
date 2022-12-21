function square (num) {
    for (let i = 0; i <= num; i++) {
        if (i * i === num) {
           return true
       }
    }
    return false
}
console.log(square(-1))
