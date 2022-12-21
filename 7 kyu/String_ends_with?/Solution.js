function solution(str, ending) {
   return str.endsWith(ending)
}

console.log(solution('samurai', 'ra'))



// another solution
// function solution(str, ending) {
//     return str.slice(0 - ending.length) === ending;
// }


