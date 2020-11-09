
// print factorial of n
{
    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    let fact = 1;
    for (; n>1; --n){
        fact*=n;
    }
    console.log(fact);
}