
// take input n and print powers upto 2^n and upto 256
{
    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    const max = 1<<n;
    let i = 1;
    while(i<=max && i<=256){
        console.log(i);
        i<<=1;
    }
}