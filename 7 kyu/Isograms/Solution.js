function isIsogram(str) {
    str = str.toLowerCase()
    let array = str.split("").sort()
    for (let i = 0; i < array.length; i++) {
        if(array[i] === array[i+1]){
            return false
        }
    }
    return true
}
console.log(isIsogram("moOse"))