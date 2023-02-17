function checkExam(array1, array2) {
    let res = 0;
    for (let i = 0; i < array1.length; i++) {
      if(array1[i] === array2[i]) {
          res += 4
      } else if(array2[i] === ""){
          res += 0
      } else {
          res -= 1
      }
    }
    return res < 0 ? 0 : res;
}

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))