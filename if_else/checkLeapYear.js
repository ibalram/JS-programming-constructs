
// check if a year is leap year or not
{
    const args = process.argv.slice(2);
    let year = parseInt(args[0]);
    let numOfDig = args[0].length;

    let flag = (numOfDig==4) && (year%4==0 && year%100 || year%400==0);
    console.log(flag?"Leap year":"Not a leap year");
}