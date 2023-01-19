function addBinary(a,b) {
    let num = a + b
    let binary = (num % 2).toString()
    while (num > 1) {
        num = parseInt(num / 2);
        binary = (num % 2) + binary;
    }
   return binary
}

console.log(addBinary(5,9))



