function CarRental(d) {
    let eachDayRent = 40;
    let res;
    if (d >= 7) {
        res = (d * eachDayRent) - 50;
    } else if (d >= 3 && d <= 7) {
        res = (d * eachDayRent) - 20;
    } else if (d < 3) {
        res = d * eachDayRent;
    }
    return res;
}
console.log(CarRental(2))