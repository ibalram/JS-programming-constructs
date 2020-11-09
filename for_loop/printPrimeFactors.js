
// print prime factorisation of n
{
    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    const limit = Math.floor(Math.sqrt(n));
    for(let i = 2; i<=limit; ++i){
        if (n%i==0){
            console.log(i);
            while (n%i==0) n/=i;
        }
    }
    if (n>1) console.log(n);
}