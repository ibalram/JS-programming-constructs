// find 2nd largest and smallest of an array of 10 random numbers 

{
    function get3DigRandom(){
        let min = 100;
        let max = 1000;
        return Math.floor(Math.random()*(max-min)+min);
    }
    let arr = new Array();
    for (let i =0; i<10; ++i){
        arr.push(get3DigRandom());
    }
    arr.sort();
    let i = 0;
    let j = 9;
    while(i<9 && arr[i]==arr[0]) ++i;
    while(j>=0 && arr[j]==arr[9]) --j;
    console.log("Second largest: "+arr[j]);
    console.log("Second smallest: "+arr[i]);
}