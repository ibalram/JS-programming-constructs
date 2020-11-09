
// find maximum and minimum of 5 random numbers from user
{
    const arr=process.argv.slice(2);
    let min = 1000;
    let max = 0;
    for (let i =0; i<arr.length; ++i){
        min = Math.min(min, parseInt(arr[i]))
        max = Math.max(max, parseInt(arr[i]));
    }
    console.log("Max : "+ max);
    console.log("Min : "+ min);
}