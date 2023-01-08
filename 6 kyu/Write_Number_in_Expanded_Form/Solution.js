function expandedForm(num) {
    let multiply = 10;
    let array = [];
    while (num > 1) {
        let temp = num % multiply
        if (temp > 0) {
            array.unshift(temp)
        }
        num = num - temp
        multiply = multiply * 10
    }
  return array.join(" + ")
}

console.log(expandedForm(70304))