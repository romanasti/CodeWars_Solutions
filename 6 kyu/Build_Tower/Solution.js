function towerBuilder(nFloors) {
    let asterisk , space, resArray = [];
    for (let i = 1; i <= nFloors; i++) {
        space = " ".repeat(nFloors-i)
        asterisk = "*".repeat(2*i-1)
        resArray.push(space + asterisk + space)
    }
    return resArray
}

console.log(towerBuilder(6))