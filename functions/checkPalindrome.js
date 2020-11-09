
// function to temperature conversion
{
    function isPalindrome(n){
        let reverse = n.toString().split('').reverse().join('');
        return n==reverse;
    }

    const args = process.argv.slice(2);
    let n = parseInt(args[0]);
    console.log(isPalindrome(n));

}