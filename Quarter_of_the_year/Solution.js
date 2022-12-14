function QuarterofTheYear(month) {
    return (month >= 1 && month <= 3)
        ? 1 : (month >= 3 && month <= 6)
            ? 2 : (month >= 6 && month <= 9)
                ? 3 : 4
}
console.log(QuarterofTheYear(2))
