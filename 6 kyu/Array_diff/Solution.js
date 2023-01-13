function arrayDiff(a, b) {

    let res = [];
    a.forEach(function include(element) {
        if (!b.includes(element)) {
            return res.push(element)
        }
    })
    return res
}

console.log(arrayDiff([1, 2, 3], [1, 2]))