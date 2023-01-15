function twoSort(s) {
    let str = s.sort().slice(0, 1).join().split("")
    let a = "";
    for (let i = 0; i < str.length; i++) {
        a += str[i] + "***"
    }
    return a.slice(0,-3)
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))