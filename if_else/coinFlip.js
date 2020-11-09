
// simulate coin flip
{
    const HEAD = 1;
    const TAIL = 0;

    let flip = Math.floor(Math.random()*10)%2;
    console.log(flip==HEAD?"HEAD":"TAIL");
}