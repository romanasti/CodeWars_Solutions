function isPalindrome(x) {
    let upperCase = x.toUpperCase()
    let start = upperCase;
    let end = upperCase.split("").reverse().join("");
    return start === end

}

console.log(isPalindrome('abba'))