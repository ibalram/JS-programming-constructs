// find 2nd largest and smallest of an array of 10 random numbers 

{
    function get3DigRandom(){
        let min = 100;
        let max = 1000;
        return Math.floor(Math.random()*(max-min)+min);
    }
    let arr = new Array();
    let largest = 0;
    let smallest = 1000;
    for (let i =0; i<10; ++i){
        arr.push(get3DigRandom());
        largest = Math.max(largest, arr[i]);
        smallest = Math.min(smallest, arr[i]);
    }
    let secondSmallest = 1000;
    let secondLargest = 0;
    for (let i =0; i<10; ++i){
        if (secondLargest<arr[i] && arr[i]<largest)
            secondLargest = arr[i];
        if (secondSmallest>arr[i] && arr[i]>smallest)
            secondSmallest = arr[i];
    }

    console.log("Second largest: "+secondLargest);
    console.log("Second smallest: "+secondSmallest);
}