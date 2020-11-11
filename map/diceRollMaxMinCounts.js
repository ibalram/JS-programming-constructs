// roll dice until any number appears 10 times and print maximum and minimum times appeared dice number

{
    function rollDice(){
        return Math.floor(Math.random()*6)+1;
    }
    let map = new Map();
    let maxCountNumber = -1;
    while (true){
        let key = rollDice();
        map.set(key, map.has(key) ? map.get(key)+1 : 1);
        if (map.get(key)==10){
            maxCountNumber = key;
            break;
        }
    }
    let minCountNumber =-1;
    let minCount = 11;
    for(let i = 1; i<=6; ++i){
        if (map.has(i) && map.get(i)<minCount){
            minCount = map.get(i);
            minCountNumber = i;
        }
    }
    console.log("MaxCountNumber: "+maxCountNumber+", count: 10");
    console.log("Min count number: "+minCountNumber+", count: "+minCount)
}