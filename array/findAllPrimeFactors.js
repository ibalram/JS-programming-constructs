
// find all prime factorisation of n
{
    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    const limit = Math.floor(Math.sqrt(n));
    let primeFactores = new Array();
    for(let i = 2; i<=limit; ++i){
        if (n%i==0){
            let count = 0;
            while (n%i==0){
                n/=i;
                count++;
            }
            primeFactores.push(new Array(i,count));
        }
    }
    if (n>1){
        primeFactores.push(new Array(n,1));
    }
    console.log(primeFactores);

}