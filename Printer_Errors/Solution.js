function printerError(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] > 'm'){
            res++
        }
    }
    return res +"/"+s.length
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))