
// function to temperature conversion
{
    function getReverse(n){
        return parseInt(n.toString().split('').reverse().join(''));
    }
    function isPalindrome(n){
        return n==getReverse(n);
    }
    function isPrime(n){
        for(let i = 2; i<=Math.floor(Math.sqrt(n)); ++i){
            if (n%i==0) return false;
        }
        return true;
    }

    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    let flag = isPrime(n);
    if (flag){
        console.log("Number is prime");
        if (isPrime(getReverse(n))) console.log("Reverse is also prime");
        else console.log("Reverse is not prime");
    }
    else{
        console.log("number is not prime");
    }

}