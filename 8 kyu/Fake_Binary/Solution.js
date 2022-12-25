function fakeBin(x){
    let newStr = '';
    for (let i = 0; i < x.length; i++) {
        (x[i] < 5) ? newStr += "0" : newStr += "1"
    }
    return newStr
}

console.log(fakeBin('45385593107843568'))