
// check day of month is in between 20 March and 20 June
{
    const args = process.argv.slice(2);
    let day = parseInt(args[0]);
    let month = parseInt(args[1]);

    let flag = false;
    if((4<=month && month<=5) || (month == 3 && day >= 20) || (month == 6 && day <= 20))
        flag = true;
    console.log(flag);
}