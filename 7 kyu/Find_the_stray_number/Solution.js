function stray(numbers) {
    let arr = numbers.sort()
    if(arr[arr.length-1] !== arr[arr.length-2])
        return arr[arr.length-1]
    else {return arr[0]}
}

console.log(stray([-843, 17, 17, 17, 17, 17, 17]))