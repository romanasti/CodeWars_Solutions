function duplicateEncode(word) {
    let array = word.toLowerCase().split("")
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        let x = array[i]
        if (temp[x] === undefined) {
            temp[x] = 1
        } else {
            temp[x] += 1
        }
    }
    return array.map(function (word) {
        return temp[word] === 1 ? "(" : ")"
    }).join("")
}

console.log(duplicateEncode("recede"))


