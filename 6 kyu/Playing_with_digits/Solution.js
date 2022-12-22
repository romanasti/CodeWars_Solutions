function digPow(n, p){
    let arrayNumbers = n.toString().split("").map(i => Number(i))
    let temp = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        temp += arrayNumbers[i] ** p
        p++
    }
    return (temp % n !== 0) ? -1 : temp / n
}

console.log(digPow(92, 1))
