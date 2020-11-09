
// print week day
{
    const args = process.argv.slice(2);
    let dig = parseInt(args[0]);
    const weekDay = new Array("None","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
    if (dig<=7 && dig>=1)
        console.log(weekDay[dig]);
}