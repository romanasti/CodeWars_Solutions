function getDivisorsCnt(n) {
   if(n === undefined) {return 1}
    let temp = 0;
    for (let i = 0; i <= n; i++) {
        if(n % i === 0) {
            temp ++
        }
    }
    return temp
};

console.log(getDivisorsCnt())