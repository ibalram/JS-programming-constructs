
// simulate coin flip untill any head or tail appears 11 time
{
    const HEAD = 1;
    const TAIL = 0;

    let headCount = 0;
    let tailCount = 0;
    while (headCount<11 && tailCount<11){
        let flip = Math.floor(Math.random()*10)%2;
        headCount+=flip==HEAD;
        tailCount+=flip==TAIL;
        console.log(flip==HEAD?"HEAD":"TAIL");
    }
}