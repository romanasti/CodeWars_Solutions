function count(string) {
    let str = string.split("")
    let obj = {};
    for (const key of str) {
        obj[key] = 0
    }
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] += 1
    }

    return obj;
}

console.log(count(""))


