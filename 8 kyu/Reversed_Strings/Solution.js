
function ReverseString (str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

console.log(ReverseString("world"))

// another solution

// function ReverseString (str) {
//     return str.split("").reverse().join("")
// }
//
// console.log(ReverseString("world"))