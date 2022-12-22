function invert(array) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(array[i] * -1)
        // array[i] *= -1;      another solution
        // array.map(el => -el);
    }
    return res;
}

console.log(invert([1,2,3,4,5]))