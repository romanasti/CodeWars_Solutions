function Abrev(name) {
    return name
        .split(" ", 2)
        .reduce((prevVal, curWord) => prevVal + curWord[0] + ".", "")
        .slice(0, -1)
        .toUpperCase()
}
console.log(Abrev("patrick feeney"))