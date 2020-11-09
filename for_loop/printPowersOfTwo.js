
// take input n and print powers upto 2^n
{
    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    const max = 1<<n;
    for(let i = 1; i<=max; i<<=1){
        console.log(i);
    }
}