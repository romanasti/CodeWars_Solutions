function wave(str) {
    let resArray = [];
    for (let i = 0; i < str.length; i++) {
      let temp = str.split("")
        if(temp[i] === " ") continue;
        temp[i] = temp[i].toUpperCase()
        resArray.push(temp.join(""))
    }
    return resArray
}

console.log(wave("hello"))
