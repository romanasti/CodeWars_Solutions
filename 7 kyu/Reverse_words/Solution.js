function reverseWords(str) {
    let arr = str.split(" ");
    return arr.map(w => w.split("").reverse().join("")).join(" ");
  }

  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))