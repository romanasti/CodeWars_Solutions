function bmi(weight, height) {
    let index = weight / (height ** 2)
    return (index <= 18.5) ? "Underweight"
        : (index <= 25.0) ? "Normal"
            : (index <= 30.0) ? "Overweight": "Obese"
}
console.log(bmi(90, 1.80))