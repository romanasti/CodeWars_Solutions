
function toJadenCase(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === " ") {
            res += str[i].toUpperCase();
        } else {
            res += str[i];
        }
    }
    return res;
}


// another solution
// function toJadenCase (str) {
//     return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
// };

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))
