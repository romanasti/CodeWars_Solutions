function gimme(triplet) {
    let s = [...triplet].sort(function (a,b) {return a - b})
    let middle = s[s.length-2]
    for (let i = 0; i < triplet.length; i++) {
        if(triplet[i] === middle) { return i }
    }
}

console.log(gimme([5, 10, 14]))