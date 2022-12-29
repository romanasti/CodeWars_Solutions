function removeSmallest(numbers) {
    let smallest = numbers[0]
    let copy = [...numbers]
    for (let i = 0; i < copy.length; i++) {
        if (copy[i] < smallest) {
            smallest = copy[i]
        }
    }
    let indexOfSmallest = copy.indexOf(smallest);
    copy.splice(indexOfSmallest,1)
    return copy
}

console.log(removeSmallest([2, 2, 1, 2, 1]))