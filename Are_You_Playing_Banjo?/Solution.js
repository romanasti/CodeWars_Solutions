let name = 'Roma'
function playBanjo (name) {
    let firstLetter = name.slice(0,1)
    return (firstLetter == 'R' || firstLetter == 'r') ? name + " plays banjo" : name + " does not play banjo"
}
console.log(playBanjo(name))

// another solution
// function playBanjo (name) {
//     return (name[0] == 'R' || name[0] == 'r') ? name + " plays banjo" : name + " does not play banjo"
// }

