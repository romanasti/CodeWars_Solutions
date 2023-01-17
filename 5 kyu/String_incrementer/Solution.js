function incrementString(str) {
    return str.replace(/[0-9]*$/, el => ('' + (+el + 1)).padStart(el.length,"0"))
}

console.log(incrementString("foo000"))
