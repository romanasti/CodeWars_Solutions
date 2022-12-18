function nb_year(p0, percent, aug, p) {
    let pr = percent / 100;
    let years = 0;
    while(p0 < p) {
        p0 += (p0 * pr) + aug | 0
        years+=1
    }
    return years
}
console.log(nb_year(1500000, 0.25, 1000, 2000000))









