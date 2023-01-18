function duplicateCount(text) {
    let res = 0;
    let obj = {};
    text = text.toLowerCase().split("")
    for (const key of text) {
        obj[key] = 0
    }
    for (let i = 0; i < text.length; i++) {
        obj[text[i]] += 1
    }
    for (const objElement in obj) {
        if (obj[objElement] >= 2) {
            res++
        }
    }
    return res
}

console.log(duplicateCount("aabBcde"))