function basicOp(operation, value1, value2)
{
    return (operation === '+') ? value1 + value2
        : (operation === '-') ? value1 - value2
            : (operation === '*') ? value1 * value2
                : (operation === '/') ? value1 / value2
                    : "incorrect input, please enter the arithmetic action (+,-,*,/)"
}

console.log(basicOp('.', 4, 7))


// another solution
// function basicOp(operation, value1, value2) {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
//  }