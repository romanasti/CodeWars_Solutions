function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    let arr = [];
    for (let i = 0; i < array1.length; i++) {
        arr.push(array1[i] * array1[i])
    }
    let a = arr.sort();
    let b = array2.sort();
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true
}

console.log(comp([], []))