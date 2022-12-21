function vowel(str) {
    let temp = 0;
    let x = 'a,e,i,o,u';
    for (let i = 0; i < str.length; i++) {
        if (x.indexOf(str[i]) !== -1) {
            temp += 1;
        }
    }
    return temp
}

// another solution
// function getCount(str) {
//     let temp = 0;
//     let vowels = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (str[i] === vowels[j]) {
//                 temp++;
//             }
//         }
//     }
//     return temp;
// }


console.log(vowel("Hello world"))