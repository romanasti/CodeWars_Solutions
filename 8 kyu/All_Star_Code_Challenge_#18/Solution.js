function strCount(str, letter){
    let res = 0;
    for (const strKey in str) {
        if(str[strKey] === letter) {
            res += 1
        }
    }
    return res
}

console.log(strCount('Hello', 'l'))


// another solution
// function strCount(str, letter){
//     return str.split(letter).length-1
// }