function filter_list(l) {
    let res = [];
    for (let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            res.push(l[i])
        }
    }
    return res
}

console.log(filter_list([1,2,'aasf','1','123',123]))