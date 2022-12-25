function getSum(a, b) {
    let res = 0;
    if (a === b) return a;
    if (a < b) {
        while (a <= b) res += a++;
    }
    else {
        while (a >= b) res += a--;
    }
    return res
}

console.log(getSum(335, -479))