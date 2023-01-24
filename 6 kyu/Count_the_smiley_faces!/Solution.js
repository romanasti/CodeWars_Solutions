function countSmileys(arr) {
    let valid = [':)', ':D', ';-D', ':~)', ';~D', ":-D", ";~)", ";D", ":-)", ";-)", ";)", ":~D"]
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < valid.length; j++) {
            if (arr[i] === valid[j]) {
                res++
            }
        }
    }
    return res
}

console.log(countSmileys([";D", ":~D", ":~D", ":)", ":->", ";)", ":o)"]))