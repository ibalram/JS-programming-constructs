
// check for prime
{
    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    let flag = true & (n!=1);
    for(let i = 2; i<=Math.floor(Math.sqrt(n)); ++i){
        flag&=(n%i!=0);
    }
    console.log(flag?"Prime":"Not Prime");
}