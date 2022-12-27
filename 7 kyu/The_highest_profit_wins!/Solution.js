function minMax(arr) {
    let minArray = arr[0];
    let maxArray = arr[0];
    let resultArray = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= minArray) {
            minArray = arr[i]
        }
        if (arr[i] >= maxArray) {
            maxArray = arr[i]
        }
    }
    resultArray.push(minArray, maxArray)
    return resultArray
}

// another solution
//function minMax(arr) {
// return [Math.min(...arr), Math.max(...arr)];
//}

console.log(minMax([1, 2, 3, 4, 5]))
