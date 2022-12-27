function findOdd(A) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; A.length > j; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return A[i];
        }
    }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))


// another solution
// function findOdd(A) {
//     let obj = {};
//     for (let i = 0; i < A.length; i++) {
//         obj[A[i]] = (obj[A[i]] || 0) + 1;
//     }
//     for (let key in obj) {
//         if (obj[key] % 2 !== 0) {
//             return Number(key);
//         }
//     }
// }