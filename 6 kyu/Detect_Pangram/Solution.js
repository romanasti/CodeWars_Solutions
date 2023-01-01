function isPangram(string){
    string = string.replace(/[^a-zа-яё]/gi, '').toUpperCase().split("")
    let  res = [];
    for(let str of string) {
        if(!res.includes(str)) {
            res.push(str)
        }
    }
   return res.length === 26
}

console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))