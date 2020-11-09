
// simulate coin flip
{
    const args = process.argv.slice(2);
    let dig = parseInt(args[0]);
    const words = new Array("Zero","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine");
    if (dig<10 && dig>=0)
        console.log(words[dig]);
}