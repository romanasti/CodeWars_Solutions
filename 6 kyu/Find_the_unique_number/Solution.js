function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                temp = true;
                break;
            }
        }
        if (!temp) return arr[i];
    }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))