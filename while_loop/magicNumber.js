
// take input n and print powers upto 2^n and upto 256
{
    const args = process.argv.slice(2);
    let magicNumber = parseInt(args[0]);
    let l = 1;
    let r = 101;
    let steps = 0;
    while(r-l>0){
        steps+=1
        let mid = l+r>>1;
        if(mid==magicNumber){
            console.log("Hurray! magic number found in "+steps+" guesses.");
        }
        if (magicNumber>mid){
            l = mid+1;
        }
        else{
            r = mid;
        }
    }
}