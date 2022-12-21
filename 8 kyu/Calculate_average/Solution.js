function averageNumbers (array) {
    let temp = 0;
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        temp += array[i]
        average = temp / array.length
    }
    return average
}

// another solution
// function averageNumbers (array) {
//   return array.length > 0 ? array.reduce((a,b) =>  a + b, 0) / array.length : 0
// }

console.log(averageNumbers([1,2,3,4]))