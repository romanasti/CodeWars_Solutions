function removeEveryOther(arr){
  let array = [];
    for (let i = 0; i < arr.length; i+=2) {
        array.push(arr[i])
    }
    return array
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))