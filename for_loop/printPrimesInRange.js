
// print primes in a range
{
    const args = process.argv.slice(2);
    let start = parseInt(args[0]);
    let end = parseInt(args[1]);
    for (let n = start; n<=end; ++n){
        let flag = true & (n!=1);
        for(let i = 2; i<=Math.floor(Math.sqrt(n)); ++i){
            flag&=(n%i!=0);
        }
        if (flag) console.log(n);
    }
}