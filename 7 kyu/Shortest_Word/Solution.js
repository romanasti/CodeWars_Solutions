function findShort(s){
    let arr = s.split(" ").map((s) => s.length);
    let short = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < short) {
            short = arr[i]
        }
    }
    return short
}

console.log(findShort("BTC Monero LiteCoin ProofOfStake Factom LiteCoin Dogecoin Waves Dogecoin Dash Mine ProofOfStake DarkCoin ProofOfWork Classic"))