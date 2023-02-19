function warnTheSheep(queue) {
    let pos = queue.reverse().indexOf("wolf")
    return pos === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${pos}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
