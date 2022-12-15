function friend(friends) {
    let temp = "";
    for (let i = 0; i <= friends.length-1; i++) {
        if (friends[i].length === 4) {
            temp += friends[i] + ","
        }
    }
    return temp.split(",").slice(0,-1)
}

// another solution
// function friend(friends){
//     return friends.filter(function (name){
//         return name.length == 4;
//     });
// }

console.log(friend(["Ryan", "Kieran", "Jason", "Roma"]))