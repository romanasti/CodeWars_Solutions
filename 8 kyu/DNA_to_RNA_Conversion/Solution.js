function DNAtoRNA(dna) {
   return dna.replace(/t/gi, "U")
}


// another solution
// function DNAtoRNA(dna) {
//    let newStr = '';
//    for (let i = 0; i < dna.length; i++) {
//       if(dna[i] === "T") {
//          newStr += "U";
//       } else {
//          newStr += dna[i]
//       }
//    }
//    return newStr
// }


console.log(DNAtoRNA("GCAT"))



