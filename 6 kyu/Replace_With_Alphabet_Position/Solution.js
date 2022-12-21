function alphabetPosition(text) {
    let temp = text.toUpperCase().split("").join("")
    let array = [];
    for (let i = 0; i < temp.length; i++) {
        let values = temp.charCodeAt(i)
        if (values > 64 && values < 91) {
            array.push(values - 64)
        }
    }
    return array.join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))


