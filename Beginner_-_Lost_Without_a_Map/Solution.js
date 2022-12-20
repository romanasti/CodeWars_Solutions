function maps(x){
let newArray = [];
    for (let i = 0; i < x.length; i++) {
        newArray.push(x[i] * 2)
    }
    return newArray
}

console.log(maps([4, 1, 1, 1, 4]))