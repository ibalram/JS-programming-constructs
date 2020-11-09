
// print Nth harmonic number
{
    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    let res = 0;
    for(let i = 1; i<=n; ++i){
        res+=1/i;
    }
    console.log(res);
}