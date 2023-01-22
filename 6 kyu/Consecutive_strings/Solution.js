function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return '';
    let res = "";
    let newStr = "";
    for (let i = 0; i < strarr.length; i++) {
        res = strarr.slice(i, i + k);
        if (res.join("").length > newStr.length) {
            newStr = res.join("");
        }
    }
    return newStr;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))

// let x = ["zone","theta"]
// let b = "abigail"
// let a = x[0+1].length
// console.log(a)