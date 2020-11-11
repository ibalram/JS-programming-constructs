// print count of individuals which have birth month out of 50 individuals
{
    function getBirthMonth(){
        return Math.floor(Math.random()*12)+1;
    }
    let map = new Map();
    for (let i = 0; i<50; ++i){
        let month = getBirthMonth();
        map.set(month, map.has(month)?map.get(month)+1:1);
    }
    console.log("month => count");
    console.log(map);
}