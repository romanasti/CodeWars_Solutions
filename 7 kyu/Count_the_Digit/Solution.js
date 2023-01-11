function nbDig(n, d) {
    let res = "";
    for (let i = 0; i <= n; i++) {
        res += i ** 2
    }
    return res.split(d).length -1
}

console.log(nbDig( 5750, 0))